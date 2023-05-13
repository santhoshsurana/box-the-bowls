import React from 'react'


import about_image from '../../assets/images/meals.png'

const About = () => {
    return (
        <>
            <section className="max-w-6xl mx-auto">
                <div className="w-full mx-auto md:mt-28 mt-4 md:pb-20 ">
                    <div className="items-stretch justify-between flex flex-col md:flex-row-reverse">
                        <div className="md:w-1/2 w-full md:p-0 px-6 py-4 md:pl-8">
                            <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight text-btb-blue" >All About <span className="text-btb-yellow">Box the Bowls</span></h2>
                            <p className="mb-9 text-base leading-relaxed text-justify text-gray-600 font-normal  " data-content="about-us">At Box the Bowls, we're passionate about delivering healthy, delicious food bowls right to your doorstep. Our mission is to provide our customers with convenient, cost-effective meal options that are prepared with care and attention to detail.</p>
                            <p className="mb-9 text-base leading-relaxed text-justify text-gray-600 font-normal" data-content="about-us">Our food bowls are made with fresh, high-quality ingredients that are carefully selected to ensure maximum flavor and nutrition. We offer a variety of options to suit every taste and dietary preference, from hearty meat-based bowls to fresh, vibrant vegan options.</p>
                            
                            <p className="mb-9 text-base leading-relaxed text-justify text-gray-600 font-normal" data-content="about-us">One of the things that sets us apart is our commitment to convenience. We understand that life can be busy, which is why we offer real-time food prep updates through WhatsApp, as well as online payment options with GPay, Paytm, and PhonePe. Plus, our OTP-based authentication system ensures that your food is delivered by trusted riders, giving you complete peace of mind.</p>
                            <p className="mb-9 text-base leading-relaxed text-justify text-gray-600 font-normal" data-content="about-us">We believe that everyone should have access to healthy, delicious meals, and we're dedicated to making that a reality. Whether you're looking for a quick lunch or a satisfying dinner, we've got you covered. Thanks for choosing Box the Bowls for your food bowl needs!</p>
                            <button className="inline-flex items-center justify-center rounded p-3 text-base font-semibold text-white transition duration-300 ease-in-out bg-btb-yellow hover:bg-btb-yellow/80 hover:shadow-lg"> Learn More </button>
                        </div>
                        <div className="text-center w-full md:w-1/2">
                            <img src={about_image} alt="about" className="mx-auto  lg:ml-auto w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About