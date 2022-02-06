import React,{useEffect} from 'react'
import './App.css';
import "aos/dist/aos.css"
import AOS from 'aos'
import Main from './components/Main_Home';
import About from './components/Aboutus';
import Work from './components/Ourwork';
import OurTeam from './components/OurTeam';
import OurEvent from './components/OurEvent';
import Home from './components/Home';
import Reach from './components/Reach';
import Cases from './components/Cases';
import kar from './components/images/Karnataka.svg'
import Founder from './components/Founder';
import Volunteer from './components/volunteer';
import { Carousel } from 'react-bootstrap';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import {Route,Routes} from 'react-router-dom'


function App() {
  useEffect(()=>{
    AOS.init({duration:2000});
    document.title='Youth India Foundation'
  },[])  
  window.addEventListener("scroll",function(){
    var fixedhead=document.getElementById("fix")
    fixedhead.classList.toggle("stick",window.scrollY>0)
  })
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/team' element={<OurTeam/>}/>
        <Route path='/events' element={<OurEvent/>}/>  
      </Routes>
    </div>
  );
}

export default App;
