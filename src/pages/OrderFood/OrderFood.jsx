import PageHeader from "../../components/PageHeader/PageHeader";
import shopBg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0)
    
    return (
        <div>
            <PageHeader
                title={'OUR SHOP'}
                subTitle={'Would you like to try a dish?'}
                bgImage={shopBg}
            ></PageHeader>
            
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'py-16 px-16'}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default OrderFood;