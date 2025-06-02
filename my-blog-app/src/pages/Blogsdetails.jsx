
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Editblog from './Editblog';

export default function Blogsdetails() {
    const blog=useLoaderData();
    const navigate = useNavigate()
    console.log(blog);

    
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-8 offset-md-2 bg-white'>
                <h2>{blog.title}</h2>
                <h5>{blog.date}</h5>
                <button onClick={() => navigate(`/editBlog/${blog.id}`)} className='btn btn-success'>Edit</button>
                <div className='bg-yellow'>
                <h6 className='mt-4 border p-3'>{blog.description}</h6>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}
