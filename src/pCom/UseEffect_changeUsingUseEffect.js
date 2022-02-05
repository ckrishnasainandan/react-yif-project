import React,{useState,useEffect} from 'react'

const UseEffect_changeUsingUseEffect = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=> {
        console.log("updated")
    },[count])
    const change = () =>
    {
        setCount(count+1)
    }
    const handleChange = (event) =>
    {
        setName(event.target.value)
        //console.log(event.target.value)
    }
    return (
        <div>
        <center>
            <button onClick={change}>count:{count}</button>
            <form>
                <input type="text" value={name} onChange={handleChange}/>    
            </form>    
        </center>        
        </div>
    )
}

export default UseEffect_changeUsingUseEffect
