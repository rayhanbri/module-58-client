import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { user } = useAuth();
    const { id: jobId } = useParams();

    console.log(jobId)
    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkdIn = form.linkdIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkdIn, github, resume)

        const application = {
            jobId,
            applicant: user.email,
            linkdIn,
            github,
            resume
        }

        axios.post('https://module-58-server-omega.vercel.app/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1300
                    });
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <form onSubmit={handleApply} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <label className="label">LinkedIN Profile</label>
                <input type="url" name='linkdIn' className="input" placeholder="Your LinkdIn Link" />

                <label className="label">GitHub</label>
                <input type="url" name='github' className="input" placeholder="Your GitHub Link" />

                <label className="label">Resume Link</label>
                <input type="url" name='resume' className="input" placeholder="Your Resume Link" />
                <input type="submit" className='btn btn-warning mt-2' value="Apply" />
            </form>
        </div>
    );
};

export default JobApply;