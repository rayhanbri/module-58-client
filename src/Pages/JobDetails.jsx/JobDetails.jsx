import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title,_id} = useLoaderData();
    return (
            <div className='my-10'>
            <h1 className='text-4xl'>{title}</h1>
            <Link to={`/jobApply/${_id}`} className='btn btn-primary my-3'>Apply Now</Link>
            </div>
    );
};

export default JobDetails;