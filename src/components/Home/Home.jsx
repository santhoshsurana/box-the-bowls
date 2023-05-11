import React from 'react'

import Hero from '../Hero/Hero';

import './home.css';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
    <Hero></Hero>
    <About></About>
    <Menu></Menu>
    <Contact></Contact>
    </>
  )
}

export default Home