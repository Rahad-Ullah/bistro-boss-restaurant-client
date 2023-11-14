import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './feature.css'


const Featured = () => {
    return (
        <div className="feature-bg py-16 lg:py-32 pt-6 lg:pt-16 text-white">
            <div className={` max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 `}>
                <SectionTitle
                    heading={'FROM OUR MENU'}
                    subHeading={'Check it out'}
                ></SectionTitle>
                <div className="flex flex-col md:flex-row justify-between items-center gap-16">
                    <div>
                        <img src={featuredImg} alt="" className="w-4/5 md:w-full mx-auto"/>
                    </div>
                    <div className="space-y-2 text-center md:text-start">
                        <h3 className="text-xl">March 20, 2023</h3>
                        <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <div className="py-6">
                            <button className="btn-normal btn-light">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;