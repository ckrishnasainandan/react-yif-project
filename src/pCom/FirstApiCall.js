import React,{useState,useEffect} from 'react'
import axios from 'axios'

const FirstApiCall = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then( (res) =>{
                console.log(res.data)
                setPost(res.data)
            } )
            .catch( (err) => {
                console.log(err)
            })
    },[])
    return (
        <div>
            {
                post.map( (i) =>{
                    return(
                        <p key={i.id}>
                            {i.body}
                        </p>
                    )
                } )
            }
        </div>
    )
}

export default FirstApiCall
