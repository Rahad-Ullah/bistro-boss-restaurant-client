import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testomonials from "./Testomonials/Testomonials";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="shortcut icon" href="https://cdn3.iconfinder.com/data/icons/nature-37/120/aeaaqas-256.png" type="image/x-icon" />
            </Helmet>
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