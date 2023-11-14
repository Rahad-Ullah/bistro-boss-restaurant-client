import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItem from "../../components/menuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        axios.get('menu.json')
        .then(res => {
            const popularItems = res.data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    } , [])


    return (
        <div className="max-w-screen-xl pb-12 px-4 md:px-6 lg:px-8 mx-auto">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-12">
                <button className="btn-normal btn-super">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;