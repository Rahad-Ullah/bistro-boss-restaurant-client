
const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    
    return (
        <div className="flex gap-4 md:gap-6">
            <img src={image} alt="" className="w-20 h-20 md:h-24 md:w-24 rounded-b-full rounded-tr-full"/>
            <div>
                <h1 className="uppercase text-[#151515] text-lg md:text-xl">{name}------------</h1>
                <p>{recipe}</p>
            </div>
            <h3 className="text-primary">${price}</h3>
        </div>
    );
};

export default MenuItem;