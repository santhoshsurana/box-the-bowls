// Import Swiper React components



import { GiFullPizza, GiBowlOfRice, GiChickenLeg, GiTacos, GiMeal } from 'react-icons/gi';
import { TbMilkshake, TbSalad } from 'react-icons/tb';
import { BiBowlRice } from 'react-icons/bi';



//import stylesheets 
import './menu.css'

function Menu() {
    return (
        <>
            <section className="bg-menu bg-cover">
                <div className="pb-16 mx-auto -z-10">
                    <div className="sm:text-center p-5 ">
                        <h2 className="font-sans text-3xl font-bold text-center text-white sm:text-4xl   p-2" ><span className="border-btb-yellow border-b-4">Our Menu</span></h2>
                        {/* <p className="text-base text-white max-w-6xl mx-auto   md:text-lg text-justify" data-content="product-descriptions">we offer a variety of delicious food bowl options to suit every taste and dietary preference. Our bowls are made with fresh, high-quality ingredients that are carefully selected to ensure maximum flavor and nutrition. Whether you're in the mood for a hearty meat-based bowl or a fresh, vibrant vegan option, we've got you covered. Plus, with real-time food prep updates through WhatsApp, you'll always know exactly when your meal is on its way. Check out our menu below to explore all of our tasty offerings!</p> */}
                    </div>

                    <div className=" grid md:grid-cols-4 grid-cols-2 gap-4 max-w-6xl mx-auto">
                    <div className=" bg-white   rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643316">
                                <GiFullPizza size={140} className="mx-auto px-4 text-btb-yellow"></GiFullPizza>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Pizza</h3>
                            </a>
                        </div>
                        <div className=" bg-white   rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643315">
                                <BiBowlRice size={140} className="mx-auto px-4 text-btb-yellow"></BiBowlRice>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Kichidi</h3>
                            </a>
                        </div>
                        <div className=" bg-white   rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643313">
                                <GiMeal size={140} className="mx-auto px-4 text-btb-yellow"></GiMeal>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Andhra Meals</h3>
                            </a>
                        </div>
                        <div className=" bg-white  rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643314">
                                <GiTacos size={140} className="mx-auto px-4 text-btb-yellow"></GiTacos>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Wraps</h3>
                            </a>
                        </div>
                        <div className=" bg-white  rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643310">
                                <TbMilkshake size={140} className="mx-auto px-4 text-btb-yellow"></TbMilkshake>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Buttermilks</h3>
                            </a>
                        </div>
                        <div className=" bg-white  rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643317">
                                <GiChickenLeg size={140} className="mx-auto px-4 text-btb-yellow"></GiChickenLeg>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Non Veg Starter</h3>
                            </a>
                        </div>
                        <div className=" bg-white  rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643318">
                                <TbSalad size={140} className="mx-auto px-4 text-btb-yellow"></TbSalad>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Veg Starter</h3>
                            </a>
                        </div>
                        <div className=" bg-white  rounded-3xl w-42 shadow-lg ">
                            <a href="https://boxthebowls.dotpe.in/store/1/delivery#643312">
                                <GiBowlOfRice size={140} className="mx-auto px-4 text-btb-yellow"></GiBowlOfRice>
                                <h3 className='font-bold text-center text-xl text-slate-900 uppercase drop-shadow-lg py-4'>Rice Bowls</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu