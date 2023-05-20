import React from 'react'

const About = () => {
    return (
        <>
            <section id='about' className=" bg-slate-950 md:bg-about h-screen md:h-auto bg-about-mini bg-cover">
                <div className="w-full md:pb-20 ">
                    <div className="items-stretch justify-between flex flex-col md:flex-row-reverse">
                        <div className="w-full text-center md:py-56 px-6 py-8 md:pl-8">
                            <h2 className="my-6  text-3xl font-black text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px] tracking-tight text-white" >Who We Are <br />Why We Started</h2>
                            <p className="md:mb-9 max-w-2xl mx-auto text-white font-semibold text-lg " data-content="about-us">At Box the Bowls, we're passionate about delivering healthy, delicious food bowls right to your doorstep. Our mission is to provide our customers with convenient, cost-effective meal options that are prepared with care and attention to detail.</p>
                            {/* <p className="mb-9 text-base  text-justify text-gray-600 font-normal" data-content="about-us">Our food bowls are made with fresh, high-quality ingredients that are carefully selected to ensure maximum flavor and nutrition. We offer a variety of options to suit every taste and dietary preference, from hearty meat-based bowls to fresh, vibrant vegan options.</p>
                            
                            <p className="mb-9 text-base  text-justify text-gray-600 font-normal" data-content="about-us">One of the things that sets us apart is our commitment to convenience. We understand that life can be busy, which is why we offer real-time food prep updates through WhatsApp, as well as online payment options with GPay, Paytm, and PhonePe. Plus, our OTP-based authentication system ensures that your food is delivered by trusted riders, giving you complete peace of mind.</p>
                            <p className="mb-9 text-base  text-justify text-gray-600 font-normal" data-content="about-us">We believe that everyone should have access to healthy, delicious meals, and we're dedicated to making that a reality. Whether you're looking for a quick lunch or a satisfying dinner, we've got you covered. Thanks for choosing Box the Bowls for your food bowl needs!</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About