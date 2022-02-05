import React from 'react';
import logo from './images/Logo.png'
import kids from './images/kids round.png'
import {NavLink} from 'react-router-dom'
const Home = () => {
    function tog()
   {
    window.addEventListener("scroll",function(){
        var fixedhead=document.getElementById("fix")
        fixedhead.classList.toggle("stick",window.scrollY>0)
      })
   }
   tog()
  return <>
    <section className="home">
        <div className="header" id="fix">
         <nav>
             <NavLink to='/'><img src={logo} height="60" width="54" alt='no img'/></NavLink>
            <ul>
                <NavLink to='/about'><li>About us</li></NavLink>
                <NavLink to='/work'><li><a>Our Work</a></li></NavLink>
                <NavLink to='/team'><li><a>Our Team</a></li></NavLink>
                <NavLink to='/events'><li><a>Our Events</a></li></NavLink>
            </ul>
            <div className="right">
                <a herf="#"><button >Join us</button></a>
                <a herf="#"><button>Member Login</button></a>
            </div>
        </nav>
        </div>
        <div className="body">
            <div id="one">
                <h1>Youth India Foundation</h1>
                <b><h4>A community for everyone to look beyond their own interests. Join us in our journey of a better and brighter tomorrow.</h4></b>
                <a herf="#"><button>Get Started</button></a>
            </div>
            <div id="sec">
                <img src={kids} height="550px" width="550px" alt="img"/>
            </div>
        </div>
    </section>
  </>;
};

export default Home;
