import React from 'react';
import {NavLink} from 'react-router-dom'
import Am from './images/about.png'
import Yu from './images/yif_about us_2.png'
import Yf from './images/yif_about us_3.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {TiSocialLinkedinCircular} from 'react-icons/ti'

const Aboutus = () => {
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
      </div>
      
      <div className='about_context'>
        <div className='about_context_1'>
        <p id='big'>About</p>
        <p id='no-border'>Us</p>
        </div>
        <div className='about_context_2'>
        Youth India foundation, YIF is a social entrepreneurship platform where the youth of the nation gather to become an organization where development, funding and implementation solutions to social, cultural, or environmental issues is focused on.
Social entrepreneurship typically attempts to further broad social, cultural, and environmental goals often associated with the voluntary sector in areas such as poverty alleviation, health care and community development.
        </div>
      </div>
      <div className='about-context-img'>
          <img src={Am} width='70%' height='500px' alt='no'/>
      </div>

      <div className='about_context-1'>
        <div className='about_context_1'>
        <p id='big-1'>Our</p>
        <p id='no-border-1'>Vision</p>
        </div>
        <div className='about_context_2'>
        Youth India Foundation envisages a future for India in which youth work with all their potential to make their dreams come true. Every individual's effort helps bring forth a change. Every action of ours today, will tell a story tomorrow. Let's all work hard together to write a beautiful story for India's bright coming days.       </div>
      </div>
      <div className='about-context-img-1'>
          <img src={Yu} width='70%' height='500px' alt='no'/>
      </div>

      <div className='about_context-2'>
        <div className='about_context_1'>
        <p id='big-2'>Our</p>
        <p id='no-border-2'>Mission</p>
        </div>
        <div className='about_context_2'>
        Like our vision: "We make a living from what we get, but we make a life from what we give", we whole-heartedly believe that we can set a path of life for budding entrepreneurs by giving them the right experience and exposure. Keeping this in mind, Youth India Foundation attempts to create India's first youth driven social entrepreneurship platform where we will be focusing on bridging science and innovation with social service and welfare.

It is our mission to provide permanent solutions to those in need and we will strive till the very end to help bring about a change.</div>
      </div>
      <div className='about-context-img-2'>
          <img src={Yf} width='70%' height='500px' alt='no'/>
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

export default Aboutus;
