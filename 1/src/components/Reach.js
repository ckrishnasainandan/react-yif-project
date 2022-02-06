import React from 'react';
import kar from './Karnataka.svg'
import ReachApi from './ReachApi'
const Reach = () => {
  return <div className='Reach' style={{textAlign:'center'}}>
      <h2 className="state_head">OUR REACH IN INDIA</h2>
    <p className='fs-1'>Check all the states we are planned into.</p>
    <div className='line_reach'>
        {
            ReachApi.map((i)=>{
                return(
                    <div className='box' key={i.id} id="key">   
                        <div className='box1'>
                            <img src={i.image} width='100px' height='100px' alt='no img'/> 
                            <h3>{i.title}</h3>  
                        </div>
                        <div className='row1'>
                            <p>{i.context}</p>
                            </div>              
                    </div>
                )
            })
        }
    </div>
  </div>;
};

export default Reach;
