import React from 'react';
import Navbar from "../Pages/Shared/Navbar"
import Footer from "../Pages/Shared/Footer"
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='mx-auto w-11/12'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;