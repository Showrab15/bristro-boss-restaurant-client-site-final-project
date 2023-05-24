// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTile from "../../../components/SectionTile/SectionTile";
const Category = () => {
    return (
        <div>
            <SectionTile
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            
            ></SectionTile>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className="text-white uppercase text-4xl text-center -mt-20">Salad's</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className="text-white uppercase text-4xl text-center -mt-20">Pizza's</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className="text-white uppercase text-4xl text-center -mt-20">Soup's</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className="text-white uppercase text-4xl text-center -mt-20">Desert's</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className="text-white uppercase text-4xl text-center -mt-20">Salad's</h3>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;