import React from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    // data jodi route load kora lagto taile route e pataitham 
    // kitu ei khane component e load kora lagbe tai fetch kore nicci 
    const jobsPromise = fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </div>
    );
};

export default Home;