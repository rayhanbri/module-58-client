import React, { Suspense } from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useAuth from '../../Hooks/useAuth';
import JobApply from '../JobApply/JobApply';
import { jobPostedPromise } from '../../Api/jobApi';
import JobList from './jobList';

const MyPostedJob = () => {
    const {user} = useAuth();

    return (
        <div>
            <Navbar></Navbar>
            <Suspense>
               <JobList jobPostedPromise={jobPostedPromise(user.email)}></JobList>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJob;