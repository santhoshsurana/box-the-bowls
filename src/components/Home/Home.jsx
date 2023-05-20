import React from 'react'

import Hero from '../Hero/Hero';

import './home.css';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import StatsCounter from '../Counter/StatsCounter';
import About from '../About/About';
import Features from '../Counter/Features';

const Home = () => {
  return (
    <>
    <Hero></Hero>
    <Menu></Menu>
    <About></About>
    <Features></Features>
    <Contact></Contact>
    </>
  )
}

export default Home