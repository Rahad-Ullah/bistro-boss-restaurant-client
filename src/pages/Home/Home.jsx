import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testomonials from "./Testomonials/Testomonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="shortcut icon" href="https://cdn3.iconfinder.com/data/icons/nature-37/120/aeaaqas-256.png" type="image/x-icon" />
            </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;