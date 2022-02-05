import React from 'react';
import fou from './images/Subankar Nandha.JPG'
import Achieve from './Achieve';

const Founder = () => {
  return <>
        <section>
            <div className="founder">
                <div id="founder_1">
                    <img src={fou} width="" data-aos="zoom-in" data-aos-delay="200" />
                </div>
                <div id="founder_2">
                    <h1  data-aos='fade-up-right' data-aos-delay='100' >OUR FOUNDER MESSAGE</h1>
                    <h6 data-aos='fade-up-right' data-aos-delay='100' >
                    Mr Subhankar Nanda<br/><br/>The Founder and the Chairman but mostly importantly, the backbone of the organization. A brave hearted man, powerful and continuously growing to better. Shubhankar has been service oriented and worked on mammoth projects since his teenage. He organized a tech-fest just at the age of 16.He started Youth India to mobilize the youth of our nation to unleash their potentials to the fullest. Starting with only 4 people, Youth India was led by Shubhankar and now has 7000 members. He started the organization with a good cause and to build a social entrepreneurship platform where the youth of the nation gather to become an organization where development, funding, and implementation of solutions to all kinds of problems takes place.
                    </h6>
                    <div class="cnt"  data-aos='fade-up-right' data-aos-delay='100'  >
                            <a href='#' ><button class="know_more_">Know More</button></a>
                    </div>
                </div>
            </div>
            <div>
                <Achieve/>
            </div>
        </section>
  </>;
};

export default Founder;
