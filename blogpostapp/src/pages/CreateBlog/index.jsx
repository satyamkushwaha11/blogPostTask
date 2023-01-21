import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogEditor from '../../components/BlogEditor'
import { Post } from '../../lib/request'

const EditOptions = [
  {
    name: 'bold',
    icon: '/icons/bold.png',
  },
  {
    name: 'italic',
    icon: '/icons/italic.png',
  },
  {
    name: 'underline',
    icon: '/icons/underline.png',
  },
  {
    name: 'strickethrough',
    icon: '/icons/strickethrough.png',
  },
  {
    name: 'textFormate',
    icon: '/icons/textFormate.png',
  },
  {
    name: 'list',
    icon: '/icons/list.png',
  },
  {
    name: 'link',
    icon: '/icons/link.png',
  },
]

const CreateBlog = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");


  //--blog publishing function-----------
  const publishBlog = async () => {
    const payload = {
      blogContent: content
    }
    const result = await Post('/blogs', payload)
    navigate('/')
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
        <div
          className='homeButton '
          onClick={publishBlog}
        >
          <div className='homeButton-iconboxs'>
            <img src="/icons/addDone.png" alt="" />
          </div>
        </div>

      </div>
      {/* -----edit post container------- */}
      <div className='addBlog-main col-11 px-5'>
        <div className='col-11 addBlog-main-box p-2 '>
          <BlogEditor
            content={content}
            setContent={setContent}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateBlog