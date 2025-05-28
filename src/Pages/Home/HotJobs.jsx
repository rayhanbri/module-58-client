// import React, { use } from 'react';

import {  useEffect, useState } from "react";
import JobsCard from "../Shared/JobsCard";

const HotJobs = ({jobsPromise}) => {

    const [jobs,setJobs] = useState([]);


    useEffect(() => {
        jobsPromise
        .then(setJobs)
    },[jobsPromise])

    // console.log('userEffet', jobs)

    // const jobs = use(jobsPromise)
  
    // console.log(jobs)
    return (
        <div>
            <h2 className="text-4xl text-center">Hot Jobs Of The Day</h2>
            <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    jobs.map(job =><JobsCard key={job.id}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;