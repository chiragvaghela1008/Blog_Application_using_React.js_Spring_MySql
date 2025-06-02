
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Addblog() {
    const[blogData,setBlogData] = useState({})
    const navigate=useNavigate()

    const onHandleChange=(e)=>{
        setBlogData(pre=>({...pre,[e.target.name]:e.target.value}))
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/blog",blogData)
        navigate("/")
    }
    return (
        <>
        <div className="container mt-5">
            <div className='row'>
                <div className="col-md-8 offset-md-2" >

                 <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" onChange={onHandleChange} required/>
                </div>


                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text-area" name="description" rows="10" className="form-control" onChange={onHandleChange} required></textarea>
                </div>
                <div className='text-center'>
                <button onClick={onSubmit} type="submit" className="btn btn-success">Submit</button>
                </div>                
            
            </form>

                </div>
            </div>
        </div>
        
           
        </>
    )
}
