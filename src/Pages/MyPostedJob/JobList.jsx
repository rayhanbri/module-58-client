import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobPostedPromise }) => {
    const jobs = use(jobPostedPromise);
    // console.log(jobs)
    return (
        <div>
            YOU Posted Job : {jobs.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Count</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job,index) => <tr key={job._id}>
                                <th>{index+1}</th>
                                <td>{job.title}</td>
                                <td>{job.date}</td>
                                <td>{job.applicationCount}</td>
                                <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;