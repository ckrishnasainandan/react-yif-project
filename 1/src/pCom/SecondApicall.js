import React,{useState,useEffect} from 'react'
import axios from 'axios'

const SecondApicall = () => {
    const [post,setPost]=useState([])
    const [id,setId] = useState(0)
    useEffect(()=>
    {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>{
                setPost(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
    },[id])
    const handleChange= (event) =>
    {
        setId(event.target.value)
    }
    return (
        <div>
            <input type='type' value={id} onChange={handleChange}/>
            <h1>{post.body}</h1>
        </div>
    )
}

export default SecondApicall
