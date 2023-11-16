import { Helmet } from "react-helmet-async";
import PageHeader from "../../../components/PageHeader/PageHeader";
import menuBg from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Home/PopularMenu";
import CoverOverlay from "../../../components/CoverOverlay/CoverOverlay";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"

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
            {/* offer section */}
            <div className="px-4 md:px-6 lg:px-8">
                <div className="w-full md:w-4/5 max-w-screen-xl mx-auto">
                    <SectionTitle
                        subHeading={"Don't miss"}
                        heading={"TODAY'S OFFER"}
                    ></SectionTitle>
                    <PopularMenu
                        category={'offered'}
                        btnText={'ORDER YOUR FAVOURITE FOOD'}
                    ></PopularMenu>
                </div>
            </div>
            {/* Dessert Section */}
            <div>
                <CoverOverlay
                    image={dessertImg}
                    title={'DESSERTS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></CoverOverlay>
            </div>
        </div>
    );
};

export default Menu;