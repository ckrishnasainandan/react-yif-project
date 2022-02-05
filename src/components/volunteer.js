import React from 'react';
import vol from './images/About Us YIF.png'
const volunteer = () => {
  return <div>
      <section className='volunteer'>
        <div className='volunteer_1'>
            <h1>VOLUNTEER</h1>
            <h2>OUR OUTREACH CAMPAIGN</h2>
            <p>They say helping someone in times of need is God's work and helping without any expectations is the most human thing one can do. So let’s join hands to reach out to those in need. Volunteer for a good future. Be a volunteer!
           </p>
             <br/>
            <a href="#"><button class="b_a_volun">Be A Volunteer</button></a>
        </div>
        <div className='volunteer_2'>
        <img src={vol} width="400px" height="400px" class="" alt=""/>
        </div>
      </section>
  </div>;
};

export default volunteer;
