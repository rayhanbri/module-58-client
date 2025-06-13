import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';



const Home = () => {
    const jobsPromise = fetch('https://module-58-server-omega.vercel.app/jobs').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={`loading data`}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>
        </div>
    );
};

export default Home;