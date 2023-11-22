import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({item}) => {
    const {name, image, recipe, price, _id} = item
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const handleAddToCart = (food) => {
        if(user && user?.email){
            //send cart item to database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name, 
                image, 
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${name} Added to Cart successfully`,
                    showConfirmButton: false,
                    timer: 1500
                    });
                }
            })
        }
        else{
            Swal.fire({
                title: "Not Logged In",
                text: "Please Login to Continue",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/auth/login', {state: {from: location}})
                }
              });
        }
    }
    
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
        <figure className="">
            <img src={image} alt="foods" className="w-full"/>
            <p className="absolute top-4 right-4 bg-neutral p-2 px-4 rounded-sm text-white font-medium">$ {price}</p>
        </figure>
        <div className="card-body">
            <h2 className="card-title text-neutral">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center mt-2">
                <button onClick={() => handleAddToCart(item)} className="btn btn-normal">Add To Cart</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;