import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title} = useLoaderData();
  
    return (
        
        <div>
           <Navbar></Navbar>
            <div className='my-10'>
            <h1 className='text-4xl'>{title}</h1>
            <button className='btn btn-primary my-3'>Apply Now</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;