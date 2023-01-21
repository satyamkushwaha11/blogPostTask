import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Layout from '../HOC/Layout'
import CreateBlog from './CreateBlog';
import Homepage from './Homepage';
import ViewBlog from './ViewBlog';


const Index = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path="/createBlog" element={<CreateBlog />} />
                <Route path="/viewBlog" element={<ViewBlog />} />
            </Routes>
        </Layout>
    )
}

export default Index