import React from 'react';
import Su from './images/Subankar Nandha.JPG'
import Aa from './images/Aanis.png'
import  Sa from './images/Sangram (Co-Founder).png'
import  Pu from './images/Pushney(Co-Founder).png'
import { Carousel, CarouselItem } from 'react-bootstrap';
import G1 from './images/graph-1.png'
import G2 from './images/graph-2.png'
import G3 from './images/graph-3.png'
import Read from './ReadApi';


const Team = () => {
  return <div className='team'>
      <div className='team_vol'>
          <div className='team_vol_1'>
              <h3>VOLUNTEERS</h3>
              <h1>OUR TEAM</h1>
          </div>
          <div className='team_vol_2'>
                <div className='photo'>
                    <img src={Su} alt='no image'/>
                    <div className='overflow'>
                    <p>founder</p>
        	        <h1>Subhankar <br/>Nanda</h1>
                    <p className="text">True success is not acing all your exams, working at the top notch
                        companies, earnings millions of money but becoming a
                        humble human who uses his power to bring smiles on the faces.
                    </p>
                    </div>
                </div>
                <div className='photo'>
                    <img src={Aa} alt='no image'/>
                    <div className='overflow'>
                    <p>Co-Founder</p>
        	        <h1>Aanis <br/>Narnolia</h1>
                    <p className="text">I've always believed that every nook and cranny has a story waiting to
                        be told and I am set to make sure those beautiful
                        stories are heard
                    </p>
                    </div>
                </div>
                <div className='photo'>
                    <img src={Sa} alt='no image'/>
                    <div className='overflow'>
                    <p>Co-Founder</p>
        	        <h1>Sangram <br/>Sahoo</h1>
                    <p className="text">Capturing precious moments from life - photography - is something that
                        helps you to know who you are, connecting you to
                        your past.
                    </p>
                    </div>
                </div>
                <div className='photo'>
                    <img src={Pu} alt='no image'/>
                    <div className='overflow'>
                    <p>Co-Founder</p>
        	        <h1>Pushney <br/>Mahapatra</h1>
                    <p className="text">Versatility - the key competency of the future. Just as important it is
                        to master something you have a talent for, it is
                        equally important to take up new hobbies and develop them.
                    </p>
                    </div>
                </div>
          </div>
      </div>
      <div className='read'>
            <a href="#"><button>read more</button></a>
            <br/>
            <br/>
            <h1>Read Stories</h1>
            <div className='main_read'>
                {/* <div className='child_read'>
                    <img src={Pu} width='120px' height='120px' alt='no image'/>
                    <h4>Krishna sai</h4>
                    <p>
                    Versatility - the key competency of the future. Just as important it is
                        to master something you have a talent for, it is
                        equally important to take up new hobbies and develop them.
                    </p>
                </div> */}
                
                   <Carousel fade>    
                   {
                       Read.map( (i) => {
                           return(
                               <Carousel.Item>
                                   <div className='child_read'>
                                        <img className="img-circle" src={i.image} width='120px' height='120px' alt='no image'/>
                                        <h4>{i.name}</h4>
                                        <p>
                                            {i.context}
                                        </p>
                                        <br/>
                                        <br/>
                                </div>
                               </Carousel.Item>
                           )
                       })
                   }                   
                   </Carousel>
                
            </div>
      </div>
      <div className="graph">
            <div className="graph_1">
                <img src={G1} alt="no image" width='350px' height='500px'/>  
            </div>
            <div className="graph_1">
                <img src={G2} alt="no image" width='350px' height='500px'/>   
            </div>
            <div className="graph_1">
                <img src={G3} alt="no image" width='350px' height='500px'/>   
            </div>
      </div>
  </div>;
};

export default Team;
