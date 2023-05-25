import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTtile/SectionTitle';


const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    },[])
    return (
        <section>
            <SectionTitle
            subHeading="what our client say's"
            heading="Testimonials"
            ></SectionTitle>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     {
        reviews.map( review => 
            <SwiperSlide
            
            key={review._id}
            >

                <div  className="mx-24 my-16 flex flex-col items-center">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <FaQuoteLeft 
    
    
    className="w-[46.15px] h-[84.62px]"></FaQuoteLeft>
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
            </SwiperSlide>

            
            )
     }
      </Swiper>
        </section>
    );
};

export default Testimonial;