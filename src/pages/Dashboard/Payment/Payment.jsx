import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle
                heading={'Payment'}
                subHeading={'Please make your payment'}
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm/>
                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;