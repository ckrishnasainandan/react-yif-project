import React,{useState} from 'react'

const UseState2 = () => {
    let [name,setName] =useState({first:'hello',last:'krishna'}) 
    function handleChange(event)
    {
        console.log(event.target.value)
    }
    function handleAdd()
    {
        setName(name)
    }
    return (
        <div>
            <form>
            <h1>{name.last}</h1>   
            <h1>{name.last}</h1>
            <h1>{name.first}</h1>
                <input type="text" value={name.first} onChange={handleChange}/>
                <button onClick={handleAdd}>clickme</button>
            </form>            
        </div>
    )
}

export default UseState2
