import axios from 'axios'
import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
function UserDetails() {
  const [user, setUser] = useState({})
  const { id } = useParams()

  // console.log(id);
  useEffect(() => {
    const data = async () => {
      await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => setUser(res.data)).catch(err => console.log(err))
    }
    data()
  }, [id])
  console.log(user)
  const { name, email, phone, website, company, username, address } = user
  // console.log(company);

  return (
    <div>
      <h5>{name}</h5>
      <p>{username}</p>
      <h6>{email}</h6>
      <p>{phone}</p>
      <p>{website}</p>
      {
        address &&  <p>{address.city}</p>
      }
      {
        company &&  <p>{company.name}</p>
      }
     
      {/* <h4>{user?.company?.name}</h4> */}

    </div>
  )
}

export default UserDetails