import React,{useState} from 'react';
import logo from './Logo.png'
const NavBar = () => {
  const [toggle,setToggle]=useState(true)

  const please = () =>{
    setToggle(!toggle)
    if(toggle)
    {
      document.getElementById('imp-nav').style.display='block'
      document.getElementById('right-btn').style.top='5px'
      document.getElementById('right-btn').style.left='20px'
    }
    else{
      document.getElementById('right-btn').style.left='100px'
      document.getElementById('right-btn').style.top='-32px'
      document.getElementById('imp-nav').style.display='none'
    }
  }
  
 
  return <div>
    
      <div className="navbar">
        <nav id='nav'>
         <div className="dropDown" onClick={please}>
           <div className='q'></div>
           <div className='q'></div>
           <div className='q'></div>
         </div>

         <div className='imp-nav' id='imp-nav'>
        <div className="logo"><img src={logo} /></div>
         <ul>
           <li>About Us</li>
           <li>Our Team</li>
           <li>Our Work</li>
           <li id="imp">Our Event</li>
         </ul>
         </div>
         <div className='right-btn' id='right-btn'>
         <button className='right-btn-1'>Join-us</button>
         <button className='right-btn-2'>Register</button>
         </div>
        </nav>
      </div>
      
  </div>;
};

export default NavBar;
