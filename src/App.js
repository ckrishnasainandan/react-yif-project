import React from 'react'
import Nav from './components/NavBar';
import './App.css';
import kid from './kids round.png'
import Reach from './components/Reach';
const App = () => {
  const Done = () =>{
   
  }
  return (
     <div>
       <div className="body" id="body" onScroll={Done}>
       <Nav/>
       <div className='image'>
          <div className='image1'>
              <img  src={kid} width='40%' height='auto' alt='no'/>
          </div> 
         
          <div className='content'>
          <h1 id="one">Youth India<br/> Foundation</h1>
          <h1 id="two">Youth India Foundation</h1>
                <b><h4>A community for everyone to look beyond their own interests. Join us in our journey of a better and brighter tomorrow.</h4></b>
                <a herf="#"><button>Get Started</button></a>
          </div>
       </div>
     </div>
     <Reach/>
     </div>
  );
}




export default App

