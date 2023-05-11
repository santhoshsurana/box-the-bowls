import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";



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
            <section className="max-w-6xl mx-auto">
                <div className="pb-16 mx-auto ">
                    <div className="mb-10  sm:text-center p-5  md:mb-12">
                        <h2 className=" mb-5 font-sans text-3xl font-bold leading-none tracking-tight text-btb-blue sm:text-4xl mx-auto  " >Our Menu</h2>
                        <p className="text-base text-gray-700 max-w-3xl mx-auto  md:text-lg text-center" data-content="product-descriptions">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione at ad quidem tempore culpa harum voluptates voluptatum laboriosam autem inventore eveniet accusamus architecto vel dignissimos quis aliquid minus, dolorum facilis!</p>
                    </div>
                    <Swiper
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={10}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-full h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image1} alt="" />
                            <h3 className='font-medium  text-center'>Rice Bowls</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image2} alt="" />
                            <h3 className='font-medium text-center'>Chinese Bowls</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image3} alt="" />
                            <h3 className='font-medium text-center'>Starters</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image4} alt="" />
                            <h3 className='font-medium text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image5} alt="" />
                            <h3 className='font-medium text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image6} alt="" />
                            <h3 className='font-medium text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image7} alt="" />
                            <h3 className='font-medium text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image8} alt="" />
                            <h3 className='font-medium text-center'>Deserts</h3>
                        </div></SwiperSlide>
                        <SwiperSlide><div className=" bg-btb-blue/10  rounded w-56 h-56  shadow-lg m-4 p-4">
                            <img className="mx-auto" src={image9} alt="" />
                            <h3 className='font-medium text-center'>Deserts</h3>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Menu