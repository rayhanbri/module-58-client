import React, { use } from 'react';

const JobList = ({ jobPostedPromise }) => {
    const jobs = use(jobPostedPromise);
    console.log(jobs)
    return (
        <div>
            YOU Posted Job : {jobs.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job,index) => <tr key={job._id}>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.date}</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;