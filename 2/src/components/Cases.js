import React from 'react';
import Aos from 'aos';
import Case from './casesApi';
const Cases = () => {
    Aos.init()
  return <div className='first-cases'>
       <div data-aos="fade-up" data-aos-delay="200" className="cases">
             <h5 class=" text-center">Our Cases</h5>
            <h1 >Our Recent Leadership Program for YOUTH</h1>
        </div>
        <div className="display-cases" >
        {
            Case.map( (i) =>{
                return(
                    <>
                    <div className="recent" id="hello">
                        <div className='recent-one'>
                            <img src={i.image} alt='no img'/>
                        </div>
                        <div  className='recent-second'>
                        <h4 className="recent-text">{i.context}</h4>
                        <a href="#"><button class="recent-button">To Register</button></a>
                        </div>
                    </div>
                    </>
                );
            })
        }
        </div>        
  </div>;
};

export default Cases;
