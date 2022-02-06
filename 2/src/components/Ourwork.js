import React from 'react';
import{NavLink} from 'react-router-dom'
import yf from './images/your_friend.webp'
import Sc from './images/e_school.webp'
import Ec from './images/e_commerce.webp'
import Oc from './images/outreach.jpg'
import Carousel from 'react-elastic-carousel'
import E1 from './images/event_1.webp'
import E2 from './images/event_2.webp'
import E3 from './images/event_3.webp'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {TiSocialLinkedinCircular} from 'react-icons/ti'


const Ourwork = () => {
  return <div className='aboutus'>
      <div className='about_sky'>      
      <nav>
        <NavLink to='/'><h4>Youth India Foundation</h4></NavLink>   
        <ul>
          <NavLink to='/about'><li>About Us</li></NavLink>
          <NavLink to='/work'><li>Our Work</li></NavLink>
          <NavLink to='/team'><li>Our Team</li></NavLink>
          <NavLink to='/events'><li>Our Events</li></NavLink>
          <li>Join Us</li>
        </ul>
        <h5>Register</h5>
      </nav>
      <div className='work'>
        <h1 className='work_big'>Our</h1>
        <h1 className='work_small'>Work</h1>
        <div className='work_1'>
            <img src={yf} className='img'/>
          <div className='work_con' style={{backgroundColor:'rgb(255, 163, 176)'}}>
                <h2>-Your Friend-</h2>
                <h4>
                Your Friend is our first social enterprise initiative. It’s a platform where people of any age can evocate for help.
                </h4>
                <button className='work_btn'>Check It Out</button>
          </div>
        </div>
        <div className='work_1'>
          <div className='work_con' style={{backgroundColor:'#86d5ee'}}>
          <h2>----E-School----</h2>
                <h4>
                Youth India Foundation presents a very meticulously planned e-school that will not only serve the purpose of distance learning but also won't compromise on the students' health.
                </h4>
                <button className='work_btn'>Check It Out</button>
          </div>
          
           <div className='work_div'>
                <img  style={{borderRadius:'50%'}}src={Sc} Width='100%' height='100%'/>
           </div>

        </div>
        <div className='work_1'>
        <div className='work_div' style={{backgroundColor:'#006d21'}}>
                <img  style={{borderRadius:'50%'}}src={Ec} Width='100%' height='100%'/>
           </div>
          <div className='work_con' style={{backgroundColor:'#86ee8b'}}>

          <h2>--E-Commerce--</h2>
                <h4>
                Your Friend is our first social enterprise initiative. It’s a platform where people of any age can evocate for help. 
                </h4>
                <button className='work_btn'>Check It Out</button>
          </div>
        </div>
        <div className='work_1'>
        <div className='work_con' style={{backgroundColor:'#eebe50'}}>
          <h2>--Outreach--</h2>
          <h4>
          " It's not about saying the right things, it is about doing the right things at the right time.” With this ideology in mind, Youth Outreach programme is all set to organise a flood relief drive to assist the victims of Dharmasala Block of Jajpur District          </h4>
          <button className='work_btn'>Check It Out</button>
        </div>
        <div className='work_div' style={{backgroundColor:'#FF7600'}}>
                <img  style={{borderRadius:'50%'}} src={Oc} Width='100%' height='100%'/>
           </div>
        </div>
      </div>
      </div>
      <div className="Carousel-work">
       
        <div className="Carousel-work-1">  
            <Carousel className='Carousel-work-2'>
              <div ><img src={E1} width="350px" height=''/></div>
              <div ><img src={E2} width="350px" height=''/></div>
              <div ><img src={E3} width="350px" height=''/></div>
            </Carousel>
        </div>
        {/* <button className='work-btn'>Check More events</button> */}
      </div>
      <div className='aboutSocial'>
        <span className='Social'><BsFacebook color='#006d21' size='3rem'/></span>
        <span className='Social'><AiFillTwitterCircle color='#006d21' size='3.5rem'/></span>
        <span className='Social'><AiFillInstagram color='#006d21' size='3rem'/></span>
        <span className='Social'><TiSocialLinkedinCircular color='#006d21' size='3.7em' /></span>
        <h3>
            © Youth India Foundation 2020
        </h3>
      </div>
  </div>;
};

export default Ourwork;
