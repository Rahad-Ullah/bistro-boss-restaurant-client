import { Helmet } from "react-helmet-async";
import PageHeader from "../../../components/PageHeader/PageHeader";
import menuBg from "../../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <PageHeader
                bgImage={menuBg}
                title={'OUR MENU'}
                subTitle={'Would you like to try a dish?'}
            ></PageHeader>
            
        </div>
    );
};

export default Menu;