import React from 'react'
import Header from '../../components/Header';

const Layout = (props) => {
    return (
        <>
            <Header />
            <div className='d-flex justify-content-center'>
                {props?.children}
            </div>
        </>
    )
}

export default Layout