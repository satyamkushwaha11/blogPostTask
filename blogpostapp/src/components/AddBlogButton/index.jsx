import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddBlogButton = () => {
    const navigate = useNavigate()
    return (
        <div
            className='AddBlogButton'
            onClick={() => navigate('/createBlog')}
        >
            <div className='AddBlogButton-iconbox'>
                <img src="/icons/addBlog.png" alt="" />
            </div>
        </div>
    )
}

export default AddBlogButton