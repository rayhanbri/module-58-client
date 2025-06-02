import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const JobsCard = ({ job }) => {
    // console.log(job)
    const { _id,title, location, company_logo, company, requirements, description,salaryRange } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            {/* company div  */}
            <div className='flex gap-3'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h1 className='text-4xl'>{company}</h1>
                    <p className='flex text-center items-center gap-1'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <div className="card-actions ">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;