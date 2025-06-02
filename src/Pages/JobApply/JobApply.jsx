import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();

    // console.log(id, user)

    const handleApply = e =>{
        e.preventDefault();
        const form = e.target;
        const linkdIn = form.linkdIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkdIn,github,resume)
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleApply} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <label className="label">LinkedIN Profile</label>
                <input type="url" name='linkdIn' className="input" placeholder="Your LinkdIn Link" />

                <label className="label">GitHub</label>
                <input type="url" name='github' className="input" placeholder="Your GitHub Link" />

                <label className="label">Resume Link</label>
                <input type="url" name='resume' className="input" placeholder="Your Resume Link" />
                <input type="submit"  className='btn btn-warning mt-2' value="Apply" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default JobApply;