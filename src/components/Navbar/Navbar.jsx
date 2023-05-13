import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

//import assets
import logo from '../../assets/images/logo.webp'

//import stylesheets
import './navbar.css'

const Navbar = () => {

  const [linkAcitve, setLinkActive] = useState('');
  const [menuToggle, setMenuToggle] = useState(false);

  const scrollToSection = (element) => { 
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: 'smooth',
    })
  }


  return (
    <>
      {/* menu for small screens */}
      <nav className='w-full bg-white fixed z-10 top-0 drop-shadow-lg text-right h-16 lg:hidden block'>
        <div className="flex flex-row justify-between">
          <Link to='/'><h1 className='text-btb-blue font-bold text-3xl py-3 px-8'>Box<span className='text-btb-yellow font-semibold text-xl'>The</span>Bowls</h1></Link>

          <button className='text-btb-yellow bg-btb-blue p-4' onClick={() => { setMenuToggle(!menuToggle); }}>
            <FaBars size={32} className={menuToggle === true ? 'hidden' : 'block'} />
          </button>
        </div>
        <div className={menuToggle === false ? 'hidden mobile-menu' : 'block mobile-menu'}>
          <button className='text-btb-yellow bg-btb-blue p-4' onClick={() => { setMenuToggle(!menuToggle); }}>
            <RxCross2 size={32} className={menuToggle === false ? 'hidden' : 'block'} />
          </button>
          <Link to='/' onClick={() => {
            setLinkActive('');
            setMenuToggle(!menuToggle);
          }}><img src={logo} alt="" className='mx-auto h-32' /></Link>
          <ul>
            <li>
              <Link to='/'
                onClick={() => {
                  setLinkActive('');
                  setMenuToggle(!menuToggle);
                }} className={linkAcitve === '' ? 'active' : ''}>Home
              </Link>
            </li>
            <li>
              <Link to='/about'
                onClick={() => {
                  setLinkActive('about');
                  setMenuToggle(!menuToggle);
                }} className={linkAcitve === 'about' ? 'active' : ''}>About us
              </Link>
            </li>
            <li>
              <a href='https://boxthebowls.dotpe.in/'
                onClick={() => {
                  setLinkActive('menu');
                  setMenuToggle(!menuToggle);
                }} className={linkAcitve === 'menu' ? 'active' : ''}>Menu
              </a>
            </li>
            <li>
              <Link to='/contact'
                onClick={() => {
                  setLinkActive('contact');
                  setMenuToggle(!menuToggle);
                }} className={linkAcitve === 'contact' ? 'active' : ''}>Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* menu for desktop screens */}
      <nav className="bg-slate-50 hidden lg:block shadow-lg">
        <div className="flex justify-between max-w-6xl mx-auto">
          <p>&nbsp;</p>
          <ul>
            <li>
              <Link to='/' onClick={() => { setLinkActive('');

            }} className={linkAcitve === '' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to='/about' onClick={() => { setLinkActive('about'); }} className={linkAcitve === 'about' ? 'active' : ''}>About us</Link>
            </li>
            <li>
              <a href='https://boxthebowls.dotpe.in/' onClick={() => { setLinkActive('menu'); }} className={linkAcitve === 'menu' ? 'active' : ''}>Menu</a>
            </li>
            <li>
              <Link to='/contact' onClick={() => { setLinkActive('contact'); }} className={linkAcitve === 'contact' ? 'active' : ''}>Contact us</Link>
            </li>
          </ul>
          <div className="py-2"><button className='bg-btb-yellow rounded-3xl  px-4 py-2 text-white font-semibold'>Order Now</button></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar