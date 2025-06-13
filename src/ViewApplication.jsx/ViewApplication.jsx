import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplication = () => {
    const { id } = useParams();
    const applications = useLoaderData();
    
    console.log(applications)

    const handleChange=(e,id)=>{
        e.preventDefault()
        const value = e.target.value;
        console.log(value,id)

        axios.patch(`https://module-58-server-omega.vercel.app/applications/${id}`,{status:value})
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div>

            view:{id}
            <br />
            Total Application:{applications.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applications.map((app, index) => <tr key={app._id}>
                                <th>{index + 1}</th>
                                <td>{app.applicant}</td>
                                <td>{app.github}</td>
                                <td>
                                    <select onChange={(e)=>handleChange(e,app._id)} defaultValue="Pick a font" className="select select-ghost">
                                        <option disabled={true}>Select Status</option>
                                        <option>Pending</option>
                                        <option>Interview Call</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplication;