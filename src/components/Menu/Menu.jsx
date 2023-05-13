import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";



import image1 from '../../assets/images/image-1-min.webp'
import image2 from '../../assets/images/image-2-min.webp'
import image3 from '../../assets/images/image-3-min.webp'
import image4 from '../../assets/images/image-4-min.webp'
import image5 from '../../assets/images/image-5-min.webp'
import image6 from '../../assets/images/image-6-min.webp'
import image7 from '../../assets/images/image-7-min.webp'
import image8 from '../../assets/images/image-8-min.webp'
import image9 from '../../assets/images/image-9-min.webp'

//import stylesheets 
import './menu.css'

function Menu() {
    return (
        <>
            <section className="max-w-6xl mx-auto ">
                <div className="pb-16 mx-auto -z-10">
                    <div className="mb-10  sm:text-center p-5  md:mb-12">
                        <h2 className=" mb-5 font-sans text-3xl font-bold leading-none tracking-tight text-btb-blue sm:text-4xl border-b-4 w-48 mx-auto border-btb-yellow p-2" >Our Menu</h2>
                        <p className="text-base text-gray-700 max-w-6xl mx-auto   md:text-lg text-justify" data-content="product-descriptions">we offer a variety of delicious food bowl options to suit every taste and dietary preference. Our bowls are made with fresh, high-quality ingredients that are carefully selected to ensure maximum flavor and nutrition. Whether you're in the mood for a hearty meat-based bowl or a fresh, vibrant vegan option, we've got you covered. Plus, with real-time food prep updates through WhatsApp, you'll always know exactly when your meal is on its way. Check out our menu below to explore all of our tasty offerings!</p>
                    </div>
                    <Swiper
                        autoplay = {true}
                        speed={600}
                        centeredSlides={false}
                        spaceBetween={10}
                        freeMode={true}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 2,
                            },
                            // when window width is >= 1024px
                            1024: {
                              slidesPerView: 4,
                            },
                          }}
                        loop = {true}
                        modules={[FreeMode, Autoplay]}
                        className=""
                    >
                        <SwiperSlide><div className=" bg-btb-yellow  rounded p-4  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image1} alt="" />
                            <h3 className='font-medium relative -mt-14 p-2 bg-btb-blue text-md text-white drop-shadow-lg py-4'>Rice Bowls</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image2} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Chinese Bowls</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image3} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Starters</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image4} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image5} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image6} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image7} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image8} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-yellow  rounded  aspect-square  shadow-lg m-4">
                            <img className="mx-auto" src={image9} alt="" />
                            <h3 className='font-bold text-xl text-white drop-shadow-lg py-4 text-center'>Deserts</h3>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Menu