import React from 'react'
import  Navigation from '../component/Navigation'
import Blog  from '../component/Blog'
import axios from 'axios';
import { useEffect, useState } from 'react';

function BlogPage({photo}) {
  const [photos,setPhotos] = useState([])
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    const data = async()=>{
      await axios.get('https://jsonplaceholder.typicode.com/photos').then(res=>{  
      setPhotos(res.data)
      setIsLoading(false)
    })
    }
      data()
  },[])


  return (
    <div className='container'>
       <Navigation/>
       <h1>This is Blog</h1>
        <p>Blog ipsum dolor sit, amet consectetur adipisicing elit. Quaerat maiores temporibus officia tempora fugit accusamus quam saepe consectetur porro omnis laudantium unde consequuntur, id voluptatibus nostrum modi neque, beatae perspiciatis rem doloribus? Consectetur accusantium maiores, molestias officia corporis vero, obcaecati ea in quis harum consequatur. Sunt incidunt nemo voluptas quo est quasi, id, ut aspernatur repudiandae pariatur beatae non voluptate et officiis rerum esse perferendis culpa cupiditate quisquam asperiores? Similique nisi dignissimos iure ipsa ex consequuntur dolore. Mollitia, nobis totam repellat iste voluptatum distinctio odit id suscipit ea! Aperiam autem voluptate laborum optio corrupti magni, similique voluptas reprehenderit ducimus consectetur?</p>
          <div className="row">
       {
        photos.map(photo=><Blog photo={photo} key={photo.id}/>)
      }  

          </div>
    </div>
  )
}

export default BlogPage