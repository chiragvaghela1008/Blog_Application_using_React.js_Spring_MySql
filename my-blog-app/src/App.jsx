
import React from 'react'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from './pages/home'
import Main from './component/Main'
import axios from 'axios'
import Addblog from './pages/Addblog'
import Blogsdetails from './pages/Blogsdetails'
import Editblog from './pages/Editblog'
import Login from './pages/login'
import { Component } from 'react'
import Blogitem from './component/Blogitem'


const getAllBlogs=async()=>{
  let allBlogs=[]
  await axios.get("http://localhost:8080/blog").then(res=>
    allBlogs=res.data
  )
  return allBlogs
}

const getBlog=async({params})=>{
  let blogs=[]
  await axios.get(`http://localhost:8080/blog/${params.id}`).then(res=>{
    blogs=res.data
  })
  return blogs

}
const router = createBrowserRouter([
  { path: "/login", element: <Login /> }, // ✅ standalone Login route
  {
    path: "/",
    element: <Main />,
    children: [
      
      { path: "/", element: <Home />, loader: getAllBlogs },
      { path: "/addBlog", element: <Addblog /> },
      { path: "/blogDetails/:id", element: <Blogsdetails />, loader: getBlog },
      { path: "/editBlog/:id", element: <Editblog />, loader: getBlog },
    ],
  },
]);


export default function App() {
  return (
    <RouterProvider router={router}> 
    </RouterProvider>
    
  )
}
