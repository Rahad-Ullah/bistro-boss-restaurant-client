import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const axoisSecure = useAxiosSecure()
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useAuth()
    const navigate = useNavigate()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)


    useEffect(() => {
        if(totalPrice > 0){
            axoisSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
        }
    }, [axoisSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod);
            setError('')
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('confirm error', confirmError);
        }
        else{
            console.log('payment intent' , paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('payment id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // save payment in database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to do it.
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axoisSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                refetch()
                if(res.data?.result?.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Payment Successful",
                        text: `Trans. ID: ${paymentIntent.id}`
                      });
                    navigate('/dashboard/payment-history')
                }
            }
        }

    }    
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="btn btn-sm btn-secondary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500 text-sm">{error}</p>
            {transactionId && <p className="text-green-500 text-sm">Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;