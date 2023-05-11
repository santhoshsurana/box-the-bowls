import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//imports custom components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


//import stylesheets
import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route path='/about' element={<About></About>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App