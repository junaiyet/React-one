import React from 'react'
import {NavLink} from 'react-router-dom'
function Navigation() {
  return (
    <div>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Blog">Blog</NavLink></li>
        <li><NavLink to="/Service">Service</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
    </ul>
    </div>
  )
}

export default Navigation