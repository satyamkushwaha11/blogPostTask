import React from 'react'
import { useNavigate } from 'react-router-dom'
import parse from "html-react-parser"

const BlogCard = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div
            className='card  blogCard'
            onClick={() => navigate(`/viewBlog?id=${data?._id || ""}`)}
        >
            {/* ---for adding title in card -------- */}
            {/* <div className='blogCard-title '>
                <h3 className='text-center'>{'' || "Title"}</h3>
            </div> */}

            {/* --card body----- */}
            <div className='blogCard-body p-2 overflow-hidden'>
                {parse(data?.blogContent) || "Description"}
            </div>
        </div>
    )
}

export default BlogCard