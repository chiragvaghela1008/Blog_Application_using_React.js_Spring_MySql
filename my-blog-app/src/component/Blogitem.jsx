
import axios from 'axios';
import React from 'react'
import { useLoaderData, useNavigate, useRouteLoaderData } from 'react-router-dom'

export default function Blogitem() {
    const allBlogs = useLoaderData();
    const navigate = useNavigate()
    console.log(allBlogs);  // Check the shape of your data here
    const deleteBlog=async(id) => {
        await axios.delete(`http://localhost:8080/blog/${id}`)
        navigate("/")
      }
    return (
        <>
          {
            allBlogs.map((blog, index) => (
              <div key={index} className='card shadow p-3 mb-5 rounded border-0'>
                <div className='card-body'>
                  <h5 className='card-title'>{blog.title}</h5>
                  <p className='card-text'>{blog.description}</p>  {/* Use 'desc' */}
                  <p><a href={`/blogDetails/${blog.id}`}>View More</a></p>
                  <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                </div>
              </div>
            ))
          }
        </>
    )
}
