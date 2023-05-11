import React from 'react'

//icons 
import { IoMail } from 'react-icons/io5';
import { FaPhoneSquareAlt, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';


import Navbar from '../Navbar/Navbar'

// import stylesheets
import './header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="infoBar hidden lg:block">
                    <div className="md:max-w-6xl  mx-auto flex justify-between">
                        <p className='py-3 flex'>
                            <IoMail size={20} />
                            <span className='px-2'>info@boxthebowls.com</span>
                            <FaPhoneSquareAlt size={20} />
                            <span className='px-2'>+91 93906 80414</span>
                            <BsFillClockFill size={20} />
                            <span className='px-2'>Monday - Sat 09:00 AM to 06:00 PM, Sunday Closed</span>
                        </p>
                        <p className='flex bg-white'>
                            <a href="https://www.facebook.com" aria-label='facebook link' className='p-2  text-blue-800/90 '>
                                <FaFacebookSquare className='hover:animate-bounce'  size={32}/>
                            </a>
                            <a href="http://www.twitter.com" className='p-2 text-sky-500 '>
                                <FaTwitterSquare className='hover:animate-bounce' size={32}/>
                            </a>
                            <a href="https://www.instagram.com" className='p-2  text-rose-600'>
                                <FaInstagramSquare className='hover:animate-bounce' size={32}/>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919390680414" className='p-2  text-green-600'>
                                <FaWhatsappSquare className='hover:animate-bounce' size={32}/>
                            </a>
                        </p>
                    </div>

                </div>
                <Navbar></Navbar>
            </header>
        </>
    )
}

export default Header