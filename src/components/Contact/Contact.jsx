const Contact = () => {
    return (
        <>
            <section id='contact' className="text-gray-600 mx-auto max-w-6xl body-font relative -z-10">
                <div className="container p-5 md:py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=24,+Ashok+Nagar,+Golden+Habitat,++Whitefields,+Kondapur,+Telangana+500084,+India&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">24, Ashok Nagar, Golden Habitat,
                Whitefields, Kondapur, Telangana 500084, India</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a href='mailto:boxthebowls@gmail.com' className="text-btb-yellow leading-relaxed">boxthebowls@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 93906 80414</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Write to Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">We love hearing from our customers!</p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-btb-yellow focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-btb-yellow focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-btb-yellow focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                        </div>
                        <button className="text-white bg-btb-yellow border-0 py-2 px-6 focus:outline-none hover:bg-btb-yellow/80 rounded text-lg">Submit</button>
                        <p className="text-xs text-gray-500 mt-3">If you have any questions, comments, or feedback about our food bowls or service, please don't hesitate to reach out. You can contact us by filling out the form above, and we'll get back to you as soon as possible. We're dedicated to providing the best possible customer service, and we look forward to hearing from you!</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact