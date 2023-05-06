import axios from "axios";

import React, { useEffect,useState } from 'react'

const Users = () => {
  const [users, setUsers]= useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>  setUsers(response.data))
  })
  console.log(users)
  return (
    <div>
      
    </div>
  )
}

export default Users
