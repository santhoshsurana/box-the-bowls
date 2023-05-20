import React from 'react'
import { Link } from 'react-router-dom';
import { BsChatHeartFill } from 'react-icons/bs';

import logo from '../../assets/images/logo.webp'

import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

//import style sheets 
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className='md:mt-8'>
        <div className='bg-slate-100 p-4 lg:p-8 hidden md:block'>
          <div className='md:mx-auto max-w-6xl flex md:flex-row flex-col '>
            <div className='md:w-3/6 flex flex-col'>
              <div className='flex flex-row'>
                <img src={logo} alt="" className='md:w-32 w-full' />
                <div className='md:px-6 text-slate-700 md:text-left py-4'>
                  <p>24, Ashok Nagar, Golden Habitat, </p>
                  <p>Whitefields, Kondapur, Telangana 500084, India</p>
                  <p>boxthebowls@gmail.com</p>
                  <p>+91 93906 80414</p>
                </div>
              </div>
              <div className='py-8'>
                <input type="email" name="" id="" className=' rounded-tl-xl  rounded-bl-xl border-l border-b border-t border-btb-yellow px-4 py-2 md:w-3/5' />
                <button className='rounded-tr-xl rounded-br-xl bg-btb-yellow  text-white font-medium border border-btb-yellow px-4 py-2'><span className='drop-shadow-lg'>subscribe</span></button>
                <p className='text-sm p-2 text-center md:text-left md:w-4/5 text-btb-blue/70'>Subscribe to our newsletter and stay up-to-date on all of our latest food bowl offerings, promotions, and special deals.</p>
              </div>
            </div>
            <div className='md:w-1/6 mx-auto text-center'>
              <h2>Company</h2>
              <ul>
                <li><Link>Home</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Services</Link></li>
                <li><Link>Testimonials</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>Contact Us</Link></li>
                <li><Link>Order Now</Link></li>
              </ul>
            </div>
            <div className='md:w-1/6 mx-auto text-center'>
              <h2>Quick Links</h2>
              <ul>
                <li><Link>Media &amp; Press</Link></li>
                <li><Link>Careers</Link></li>
                <li><Link>Events</Link></li>
                <li><Link>Support</Link></li>
                <li><Link>Store Locator</Link></li>
              </ul>
            </div>
            <div className='md:w-1/6 mx-auto text-center'>
              <ul>
                <h2>Our Menu</h2>
                <li><Link>Rice bowls</Link></li>
                <li><Link>Chineese Bowls</Link></li>
                <li><Link>Curries</Link></li>
                <li><Link>Desserts</Link></li>
                <li><Link>Bakes and Cakes</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-slate-950'>
          <div className="md:hidden block w-auto mx-auto">
            <p className='flex bg-white h-18 justify-center gap-4'>
              <a href="https://www.facebook.com" aria-label='facebook link' className='p-2  text-blue-800/90 '>
                <FaFacebookSquare size={48} />
              </a>
              <a href="http://www.twitter.com" className='p-2 text-sky-500 '>
                <FaTwitterSquare size={48} />
              </a>
              <a href="https://www.instagram.com" className='p-2  text-rose-600'>
                <FaInstagramSquare size={48} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919390680414" className='p-2  text-green-600'>
                <FaWhatsappSquare size={48} />
              </a>
            </p>
          </div>
          <div className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-between text-white font-normal'>
            <p className='p-4 text-center '> &copy; 2023 Copyrights reserved to  <a href="https://www.boxthebowls.com" className='text-btb-yellow font-medium'>Box the Bowls</a>, Hyderabad. </p>

            <p className='p-4 flex mx-auto lg:mx-0'>
              Designed with <span className='px-2'>
                <BsChatHeartFill size={24} className='text-red-600' />
              </span> by
              <a href="http://www.satitechnologies.com" className='text-btb-yellow font-medium pl-2'>SatiTech</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer