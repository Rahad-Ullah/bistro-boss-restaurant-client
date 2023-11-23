import { FaTrashAlt  } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart()
    const axoisSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axoisSecure.delete(`/carts/${id}`)
                .then(res  => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                        refetch();
                    }
                })
            }
          });
    }

    return (
        <div className="bg-base-200 pb-16">
            <SectionTitle
                heading={'ADD AN ITEM'}
                subHeading={'Whats new?'}
            ></SectionTitle>
            <div className="p-12 bg-white w-4/5 mx-auto">
                <div className="flex justify-between items-center pb-8">
                    <h2 className="text-2xl">Total Items: {cart.length}</h2>
                    <h2 className="text-2xl">Total Price: $ {totalPrice.toFixed(2)}</h2>
                    <button className="btn btn-secondary">Pay</button>
                </div>
                <div>
                    {/* heading */}
                    <div className="grid md:grid-cols-12 justify-between py-7 px-6 bg-secondary rounded-t-2xl font-medium text-white">
                        <h4></h4>
                        <h4 className="md:col-span-3">ITEM IMAGE</h4>
                        <h4 className="md:col-span-5">ITEM NAME</h4>
                        <h4 className="md:col-span-2">PRICE</h4>
                        <h4 className="md:col-span-1">ACTION</h4>
                    </div>
                    {/* body */}
                    <div>
                        {
                            cart.map((item, index) => <div 
                                key={item._id}
                                className="grid md:grid-cols-12 justify-between items-center py-6 px-6 font-medium border-t">
                                <h4 className="font-bold text-lg">{index + 1}</h4>
                                <img src={item.image} alt="item" className="md:col-span-3 w-28"/>
                                <h4 className="md:col-span-5">{item.name}</h4>
                                <h4 className="md:col-span-2">$ {item.price}</h4>
                                <div className="md:col-span-1"><button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-500"><FaTrashAlt  className="text-xl"></FaTrashAlt></button></div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;