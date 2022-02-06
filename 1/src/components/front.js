import React, { Component } from 'react'
import im from './index1.jpg'
import './front.css'
class front extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="d1"> 
                <pre>
                        <img src={im} heigth='40px' width='40px' alt="sorry"/>   
                        <span className='s1'>    Home  </span>    
                        <span className='s1'>    Docs  </span> 
                        <span className='s1'>    Example  </span>
                        </pre>
                </div>
            </div>
        )
    }
}

export default front
