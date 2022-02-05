import React from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Reach from './Reach';
import Cases from './Cases';
import Founder from './Founder';
import Volunteer from './volunteer';
import Services from './Services';
import Gallery from './Gallery';
import Team from './Team';
// import {NavLink} from 'react-router-dom'
// import logo from './images/Logo.png'
const Main_Home = () => {
  return <div >
    <Home/>
    <Reach/>
    <Cases/>
    <Founder/>
    <Volunteer/>
    <Services/>
    <Gallery/>
    <Team/> 
    <Aboutus/>
  </div>;
};

export default Main_Home;
