import React,{useEffect} from 'react'

const UseEffect_componentwillUn = () => {
    
    useEffect(()=>{
        alert("hello")
        return() =>{
               alert("deleted") 
        }
    })
    return (
        <div>
            <h1>Hello i am krishna sai nandan from ncet</h1>
            
        </div>
    )
}

export default UseEffect_componentwillUn
