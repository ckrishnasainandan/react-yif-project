import React,{useState} from 'react'

const useState3 = () => {
    const [items,setItems] = useState({id:'',name:"priya"})
    const [count,setcount] = useState(["sai","nandan"])
     
    const addItems = () =>
    {
        console.log(count)
        setcount([...count,"krishna"])
        
        
    } 
    const handleChange = (event) =>
    {
        setItems({...items,id:event.target.value})
        console.log(items.id)
    }
    const add = () =>
    {
        alert(items.id)
    }
    return (
        <div>
            <button onClick={addItems}>click</button>
            {
                count.map((i) => {
                    return(
                        <h1>{i}</h1>
                    )
                })
            }
            <form>
                <input type="text" value={items.id} onChange={handleChange}/>
                <button onClick={add}>me</button>
                <h1>
                    {JSON.stringify(items)}
                </h1>
            </form>
        </div>
    )
}

export default useState3
