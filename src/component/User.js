import React from 'react'
import{Link} from 'react-router-dom'
function User({user}) {
    const {name,email,id} =user
  return (
    <div>
        <h5>{name}</h5>
        <h6>{email}</h6>
        <Link to={`/details/${id}`}>details</Link>
    </div>
  )
}

export default User