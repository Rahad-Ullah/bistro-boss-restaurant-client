import PageHeader from "../../components/PageHeader/PageHeader";
import shopBg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./FoodCard";
import { useParams } from "react-router-dom";
import HelmetDynamic from "../../components/Helmet/HelmetDynamic";

const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [allItems, setAllItems] = useState([])
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const currentTab = categories[tabIndex]
    const items = allItems.filter(item => item.category === currentTab)

    useEffect(() => {
        axios.get('http://localhost:5000/menu')
        .then(res => {
            setAllItems(res.data)
        })
    }, [])
    
    return (
        <div>
            <HelmetDynamic></HelmetDynamic>
            <PageHeader
                title={'OUR SHOP'}
                subTitle={'Would you like to try a dish?'}
                bgImage={shopBg}
            ></PageHeader>
            
            <div className="px-4 md:px-6 lg:px-8 py-16 md:py-24">
                <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} className={'w-full md:w-4/5 max-w-screen-xl mx-auto'}>
                    <div className=" mb-12">
                        <TabList>
                            {
                                categories.map((tab, index) => <Tab
                                    key={index}
                                >
                                    {tab}
                                </Tab>)
                            }
                        </TabList>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        items.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        >
                        </FoodCard>)
                    }
                    </div>
                    
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;