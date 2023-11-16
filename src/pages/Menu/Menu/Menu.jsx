import { Helmet } from "react-helmet-async";
import PageHeader from "../../../components/PageHeader/PageHeader";
import menuBg from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Home/PopularMenu";
import CoverOverlay from "../../../components/CoverOverlay/CoverOverlay";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

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
            <div className="">
                <SectionTitle
                    subHeading={"Don't miss"}
                    heading={"TODAY'S OFFER"}
                ></SectionTitle>
                <PopularMenu
                    category={'offered'}
                    btnText={'ORDER YOUR FAVOURITE FOOD'}
                ></PopularMenu>
            </div>

            {/* Dessert Section */}
            <div className="space-y-16">
                <CoverOverlay
                    image={dessertImg}
                    title={'DESSERTS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></CoverOverlay>
                <PopularMenu
                    category={'dessert'}
                    btnText={'ORDER YOUR FAVOURITE FOOD'}
                ></PopularMenu>
            </div>

            {/* Dessert Section */}
            <div className="space-y-16">
                <CoverOverlay
                    image={pizzaImg}
                    title={'PIZZA'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></CoverOverlay>
                <PopularMenu
                    category={'pizza'}
                    btnText={'ORDER YOUR FAVOURITE FOOD'}
                ></PopularMenu>
            </div>

            {/* Salad Section */}
            <div className="space-y-16">
                <CoverOverlay
                    image={saladImg}
                    title={'SALADS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></CoverOverlay>
                <PopularMenu
                    category={'salad'}
                    btnText={'ORDER YOUR FAVOURITE FOOD'}
                ></PopularMenu>
            </div>

            {/* Dessert Section */}
            <div className="space-y-16">
                <CoverOverlay
                    image={soupImg}
                    title={'SOUPS'}
                    description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                ></CoverOverlay>
                <PopularMenu
                    category={'soup'}
                    btnText={'ORDER YOUR FAVOURITE FOOD'}
                ></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;