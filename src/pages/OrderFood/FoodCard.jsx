
const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item
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
                <button className="btn btn-normal">Add To Cart</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;