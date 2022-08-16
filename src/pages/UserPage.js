import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from '../component/User'

function UserPage() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        const data = async()=>{
            await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data)).catch(err=>console.log(err))
        }
        data()

    },[])
  return (
    <div>
     
      {
        users.map(user=> <User user={user} key={user.id}/>)
      }
    </div>
  )
}

export default UserPage