import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title,_id} = useLoaderData();
  
    return (
        
        <div>
           <Navbar></Navbar>
            <div className='my-10'>
            <h1 className='text-4xl'>{title}</h1>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary my-3'>Apply Now</button>
            </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;