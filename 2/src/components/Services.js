import React from 'react';
import SerApi from './ServicesAPI';
const Services = () => {
  return <>
        <div className='Services'>
        <div data-aos="fade-up" data-aos-delay="200" id="Services_1">
            <h1>Our Service</h1>
            <h2>Service we Provide</h2>
        </div>
        <div id="Services_2">
        {
          SerApi.map( (i)=>{
            return(
              <div id="Services_card">
                    <div id="Services_card_1">
                        <span><img src={i.icon} width='80px'/></span>
                        <h3>{i.title}</h3>
                    </div>
                    <div id="Services_card_2">
                        <p>{i.context}</p>
                        <a href="#"><button className="Serbtn">Learn More</button></a>
                    </div>
                </div>
                  );
               })
             }          
           
        </div>   
        </div>
  </>;
};

export default Services;
