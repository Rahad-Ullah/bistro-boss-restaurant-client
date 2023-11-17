import { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "../../components/menuItem";
import { Link } from "react-router-dom";

const PopularMenu = ({category, btnText}) => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get('menu.json')
        .then(res => {
            const popularItems = res.data.filter(item => item.category === category)
            setMenu(popularItems)
        })
    } , [category])


    return (
        <div className="w-full md:w-4/5 max-w-screen-xl pb-12 mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-12">
                <Link to={`/order/${category}`} className="btn-normal btn-super">{btnText}</Link>
            </div>
        </div>
    );
};

export default PopularMenu;