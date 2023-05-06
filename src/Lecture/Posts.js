import axios from 'axios';
import React, {  useState } from 'react'

const Posts = () => {
  const [posts, setPost]= useState([]);

  const handleGetRequest = async ()=> {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPost(response.data);
    }catch(error){
      console.log("Unexpecter Error!!!");
    }
  };
  
  
    
  
  console.log(posts);
  return (
    <>
    <button onClick={handleGetRequest}>Send Get Request</button>
    {
      posts===null?null:
      (<ul>
        {
          posts.map((post)=>(
            <li key={post.id}>
              <h4>{post.title}</h4>
              <span>{post.body}</span>
            </li>
          ))
        }
      </ul>)
    }
    
    </>
  )
}

export default Posts
