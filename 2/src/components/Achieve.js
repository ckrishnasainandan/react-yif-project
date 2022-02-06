import React from 'react';
import CountUp from 'react-countup';
import {FiUsers} from "react-icons/fi"
import {IoLocationOutline} from "react-icons/io5"
import {VscNotebook} from "react-icons/vsc"

const Achieve = () => {
  return <>
    <section className='achieve'>
        <div>
            <h1>
                Whatever you want to achieve,<br/> Youth India Foundation’s community will help you reach it.
            </h1>
        </div>
        <div className='count'>
            <div className='count_1'>
                <div ><FiUsers color="rgb(59, 72, 255)" size="3rem"/></div>
                <div ><CountUp start={0} end={1000} duration={7} className='c11'/> <h4 className='c12'>People</h4> </div>
            </div>
            <div className='count_1'>
                <div ><IoLocationOutline color="rgba(1, 92, 31, 0.876)" size="3rem"/></div>
                <div ><CountUp start={0} end={50} duration={3} className='c11'/>  <h4 className='c12'>Societies</h4></div>
            </div>
            <div className='count_1'>
                <div ><VscNotebook color="#fa8a28" size="3rem"/></div>
                <div ><CountUp start={0} end={100} duration={5} className='c11'/><h4 className='c12'>Youth Project</h4> </div>
            </div>
        </div>
    </section>
  </>;
};

export default Achieve;
