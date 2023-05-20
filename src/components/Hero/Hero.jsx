import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

//assets
import cover_1 from '../../assets/images/cover-1.webp';
import cover_2 from '../../assets/images/cover-2.webp';
import cover_3 from '../../assets/images/cover-3.webp';
import cover_4 from '../../assets/images/cover-4.webp';
import cover_5 from '../../assets/images/cover-5.webp';
import cover_6 from '../../assets/images/cover-6.webp';
import cover_7 from '../../assets/images/cover-7.webp';

//import stylesheets
import './hero.css'
const Hero = () => {
    return (
        <>
            <section className='w-full mx-auto -z-10'>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#3a4a5a",
                        "--swiper-pagination-color": "#3a4a5a",
                    }}
                    speed={600}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination, Navigation, Autoplay]}
                    className=''
                >
                    <SwiperSlide><a href='https://boxthebowls.dotpe.in/'>
                        <img className="object-contain w-full" src={cover_1} alt="" />
                    </a> </SwiperSlide>
                    <SwiperSlide><img className="object-contain w-full" src={cover_2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="object-contain w-full" src={cover_3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="object-contain w-full" src={cover_4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="object-contain w-full" src={cover_5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="object-contain w-full" src={cover_6} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="object-contain w-full" src={cover_7} alt="" /></SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Hero