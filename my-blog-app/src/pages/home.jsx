import React from 'react'
import Navbar from '../component/navbar'
import Footer from "../component/footer"
import Blogitem from '../component/Blogitem'
import Login from './login'


export default function home() {
  return (
    <>
     <div className='container mt-5'>
       <Login/>
       <Blogitem/>
     </div>
    </>
  )
}

