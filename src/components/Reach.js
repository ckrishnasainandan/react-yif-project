import React,{useEffect} from 'react';
import ReachApi from './ReachApi';
import AOS from 'aos'
const Reach = () => {
    useEffect(()=>{
        AOS.init();
    },[])

    console.log("hello")
  return <>
    <secton id="reach" data-aos="fade-up">
        <div >
            <h2 className="state_head">OUR REACH IN INDIA</h2>
            <p className='fs-1'>Check all the states we are planned into.</p>
        </div>
        <div className="row" data-aos="fade-zoom-in" >
        {
            ReachApi.map( (i) =>{
                return(
                    <>
                    <div className='box' key={i.id} id="key">   
                        <div className='box1'>
                            <img src={i.image} width='100px' height='100px' alt='no img'/> 
                            <h3>{i.title}</h3>  
                        </div>
                        <div className='row1'>
                             <p>{i.context}         </p>
                        </div>              
                    </div>
                    </>
                )
            })
        }
         </div>
        
    </secton>
  </>;
};

export default Reach;
