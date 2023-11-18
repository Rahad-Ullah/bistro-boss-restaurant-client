
import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testomonials from "./Testomonials/Testomonials";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import HelmetDynamic from "../../components/Helmet/HelmetDynamic";


const Home = () => {
    return (
        <div>
            <HelmetDynamic title={'Home'}></HelmetDynamic>
            <Banner></Banner>
            <Slider></Slider>
            <div>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
                <PopularMenu
                    category={'popular'}
                    btnText={'View Full  Menu'}
                ></PopularMenu>
            </div>
            <Featured></Featured>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;