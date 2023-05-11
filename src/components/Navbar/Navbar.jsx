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


  return (
    <>
      {/* menu for small screens */}
      <section className='w-full bg-btb-blue text-white h-16 sm:hidden block'>
      <button className='p-4' onClick={() => { setMenuToggle(!menuToggle);}}>
          <FaBars size={32} className={menuToggle === true ? 'hidden' : 'block'} />
          <RxCross2 size={32} className={menuToggle === false ? 'hidden' : 'block'} />
        </button>
        <div className={menuToggle === false ? 'hidden mobile-menu' : 'block mobile-menu'}>
          <nav>
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
                <Link to='/menu'
                  onClick={() => {
                    setLinkActive('menu');
                    setMenuToggle(!menuToggle);
                  }} className={linkAcitve === 'menu' ? 'active' : ''}>Menu
                </Link>
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
          </nav>
        </div>

        <div className=''>

        </div>
      </section>

      {/* menu for desktop screens */}
      <section className="bg-slate-50 hidden lg:block">
        <div className="flex justify-between max-w-6xl mx-auto">
          <Link to='/'><img src={logo} alt="" /></Link>
          <nav>
            <ul>
              <li><Link to='/' onClick={() => { setLinkActive(''); }} className={linkAcitve === '' ? 'active' : ''}>Home</Link></li>
              <li><Link to='/about' onClick={() => { setLinkActive('about'); }} className={linkAcitve === 'about' ? 'active' : ''}>About us</Link></li>
              <li><Link to='/menu' onClick={() => { setLinkActive('menu'); }} className={linkAcitve === 'menu' ? 'active' : ''}>Menu</Link></li>
              <li><Link to='/contact' onClick={() => { setLinkActive('contact'); }} className={linkAcitve === 'contact' ? 'active' : ''}>Contact us</Link></li>
            </ul>
          </nav>
          <div className="py-8"><button className='bg-btb-yellow rounded-3xl  px-4 py-2 text-white font-semibold'>Order Now</button></div>
        </div>
      </section>
    </>
  )
}

export default Navbar