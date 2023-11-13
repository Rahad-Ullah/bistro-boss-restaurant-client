
const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    
    return (
        <div className="flex gap-6">
            <img src={image} alt="" className="w-24 rounded-b-full rounded-tr-full"/>
            <div>
                <h1 className="uppercase text-[#151515] text-xl">{name}------------</h1>
                <p>{recipe}</p>
            </div>
            <h3 className="text-primary">${price}</h3>
        </div>
    );
};

export default MenuItem;