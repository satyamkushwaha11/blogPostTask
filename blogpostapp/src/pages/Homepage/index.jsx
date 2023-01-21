import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddBlogButton from '../../components/AddBlogButton'
import BlogCard from '../../components/BlogCard'
import { Get } from '../../lib/request';

const Homepage = () => {
    const navigate = useNavigate();
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        getAllBlogApi()
    }, [])

    const getAllBlogApi = async () => {
        const result = await Get('/blogs')
        setAllBlogs(result?.data?.data)
    }

    return (
        <div className='homepage_container '>
            {allBlogs && allBlogs.length == 0 && (<h3>No Blog Found</h3>)
            }        {
                allBlogs && allBlogs.length > 0 && allBlogs?.map((item, index) => (
                    <BlogCard key={index} onClick={() => navigate.push('/viewBlog')} data={item} />
                ))}
            <div className='addBtn-box '>
                <AddBlogButton />
            </div>

        </div>
    )
}

export default Homepage