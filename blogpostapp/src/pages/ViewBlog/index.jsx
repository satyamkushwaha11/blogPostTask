import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import parse from "html-react-parser"
import { Get } from '../../lib/request';

const ViewBlog = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const blogId = new URLSearchParams(search).get('id');

  const [blogData, setBlogData] = useState('');

  useEffect(() => {
    getBlog()
  }, [])

  const getBlog = async (id) => {
    const result = await Get(`/blogs/getById?blogId=${blogId}`)
    setBlogData(result?.data?.data?.blogContent)
  }

  return (
    <div className='addBlog-container'>
      {/* ----sidebar----------- */}
      <div className='addBlog-sidebar col-1'>
        <div
          className='homeButton '
          onClick={() => navigate('/')}
        >
          <div className='homeButton-iconboxs'>
            <img src="/icons/home.png" alt="" />
          </div>
        </div>


      </div>

      {/* -----edit post container------- */}
      <div className='addBlog-main col-11 px-5'>
        <div className='col-11 addBlog-main-box p-2'>
          {/* <div className='view-blog-title p-2  text-center  '>
            <h1>Blogpost</h1>
          </div> */}
          <div className='add-blog-body'>
            {parse(blogData || "") || ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBlog