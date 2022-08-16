import React from 'react'

function Blog({photo}) {
    const {title,url}=photo;
  return (
         <div className="col-lg-3 mb-4">
              <div className="card p-4">
              <img src={url} alt="" />
              <h5>{title}</h5>
              </div>
             </div>

  )
}

export default Blog