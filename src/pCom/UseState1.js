import React,{useState} from 'react'

const UseState1 = () => {
    const[c,setCount] = useState(0)
    // const useButton = () =>
    // {
    //     //count=count+1;
    //     //setCount(count+1);
    //     alert("click")
    // }
    const But = () =>
    {
        
        setCount(prevCount=>prevCount+1)
    }
    return (
        <div>
            <button onClick={()=>But()}>count{c}</button>
        </div>
    )
}

export default UseState1
