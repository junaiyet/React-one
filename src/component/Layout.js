import React from 'react'

import {Link, Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div>
        <ul>
            <li><Link to="/dashboard">home</Link></li>
            <li><Link to="/dashboard/comments">Comments</Link></li>
            <li><Link to={'blog'}>Blog</Link></li>
            <li><Link to={'contact'}>Contact</Link></li>
           
        </ul>
       <Outlet/>
        <footer>
           <h1> Footer</h1>
        </footer>
    </div>
  )
}

export default Layout