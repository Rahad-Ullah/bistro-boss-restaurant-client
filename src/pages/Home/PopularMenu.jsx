import { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "../../components/menuItem";

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
        <div className="max-w-screen-xl pb-12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-12">
                <button className="btn-normal btn-super">{btnText}</button>
            </div>
        </div>
    );
};

export default PopularMenu;