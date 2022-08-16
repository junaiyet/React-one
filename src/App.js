import  Card from './component/Card'
import  Header from './component/Header'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ServicePage from './pages/ServicePage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound';
import UserPage from './pages/UserPage';
import UserDetails from './pages/UserDetails';
import Layout from './component/Layout';
import Dashboard from './component/Dashboard';
import Comments from './component/Comments';


// function App() {
//   const [photos,setPhotos]= useState([])
//   const [isLoading,setIsLoading]=useState(true)
//   const[isTrue,setIsTrue]= useState(false)
//   useEffect(()=>{
//     const data = async()=>{
//       await axios.get("https://jsonplaceholder.typicode.com/photos").then(res=>{
//       setPhotos(res.data)
//       setIsLoading(false)
//     })
//     }
//     data()
//   },[])
//   return (
//         <div>
//           <Header/>
//           <h1>This is my first React</h1>
//           {
//             !isTrue && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam obcaecati accusantium sapiente non odit harum ea nostrum, aspernatur possimus vero.</p>
//           }
//           {
//             isLoading? <h1>Loading...</h1>:<div className="container">
//             <div className="row">      
//            {   
//            photos.map(photo=> <Card photo={photo}/>)
//            }
//             </div>
//             </div>
//           }
//        </div>
//   )
// }
// export default App


function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Blog" element={<BlogPage/>} />
      <Route path="/Service" element={<ServicePage/>}/>
      <Route path="/Contact" element={<ContactPage/>}/>
      <Route path="/users" element={<UserPage/>}/>
      <Route path="/details/:id" element={<UserDetails/>}/>
     <Route path='/dashboard' element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/comments' element={<Comments/>}/>
     </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App