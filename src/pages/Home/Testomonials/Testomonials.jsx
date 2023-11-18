
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testomonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
        .then(res => setReviews(res.data))
    } ,[])
    
    return (
        <div className="max-w-screen-xl mx-auto py-28 pt-14 px-4 md:px-6 lg:px-8">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                    key={review._id}>
                        <div  className="flex flex-col items-center gap-y-5 max-w-xs md:max-w-sm lg:max-w-screen-sm xl:max-w-screen-lg mx-auto">
                            <Rating
                                style={{ maxWidth: 180, color: "red" }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-3xl md:text-6xl text-[#151515]"/>
                            <p className="text-center">{review.details}</p>
                            <h3 className="font-medium text-secondary text-lg md:text-2xl uppercase">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testomonials;