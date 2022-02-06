import React,{useState,useEffect} from 'react'

const UseEffect_Components_1 = () => {
    const [count,setCount]=useState(0)
    useEffect(()=> {
        document.title=`clicked ${count}`
    })
    const Click= () =>
    {
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={Click}>Count{count}</button>
        </div>
    )
}
export default UseEffect_Components_1