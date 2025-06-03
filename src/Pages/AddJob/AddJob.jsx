import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useAuth from '../../Hooks/useAuth';

const AddJob = () => {
    const {user} = useAuth();


    const handleAddJob = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        // console.log(formData.entries())
        const data = Object.fromEntries(formData.entries())
        // have fun with salary 
      const {min,max,currency,...newJob} = data;
       newJob.salaryRange ={min,max,currency}
    //    havefun with requirements 
    const requirementString = newJob.requirements;
    const requirementDirty = requirementString.split(',')
    const requirementClean = requirementDirty.map(req => req.trim())
    newJob.requirements = requirementClean
    // console.log(requirementClean,requirementDirty)
    
      console.log(newJob)
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-4xl text-center text-semibold mt-7'>Please add a job</h1>
            <form onSubmit={handleAddJob}>
                {/* compoany name title and so on  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    {/* title  */}

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />
                    {/* company  */}
                    <label className="label">Company </label>
                    <input type="text" name='company' className="input" placeholder="Company Name" />
                    {/* location  */}
                    <label className="label">Location </label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />
                    {/* Logo */}
                    <label className="label">Logo URl </label>
                    <input type="text" name='company_logo' className="input" placeholder="Company Logo" />
                </fieldset>
                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" value='On-Site' name="jobType" aria-label="On-Site" />
                        <input className="btn" type="radio" value='Remote' name="jobType" aria-label="Remote" />
                        <input className="btn" type="radio" value='Hybrid' name="jobType" aria-label="Hybrid" />
                    </div>
                </fieldset>
                {/* category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Select a category" name='category' className="select">
                        <option disabled={true}>Select a category</option>
                        <option>Finance</option>
                        <option>Marketing</option>
                        <option>Sells</option>
                    </select>
                </fieldset>
                {/*Date  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>
                    <input type="date" name='date' className="input" />
                </fieldset>
                {/* Salary*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    {/* prottek ta alada div er bitor nibo and ekta main div nibo jate sundor kore thake naile overlay korbe  */}
                    <div className='grid gap-3  grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center'>
                        <div>
                            <label className="label">Salary Minimum</label>
                            <input type="text" className="input" name='min' placeholder="Salary Minimum" />

                        </div>
                        <div>
                            <label className="label">Salary Max</label>
                            <input type="text" className="input" name='max' placeholder="salary maximum" />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name='currency' className="select">
                                <option disabled={true}>Select a category</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/*Description  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>
                    <fieldset className="fieldset">
                        <textarea className="textarea h-24" name='description' placeholder="Job Description"></textarea>
                    </fieldset>
                </fieldset>
                {/* REQUIREMENTS */}
                {/* have fun is here this is unique  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirements</legend>
                    <fieldset className="fieldset">
                        <textarea className="textarea h-24" name='requirements' placeholder="Job Requirements(separate by comma)"></textarea>
                    </fieldset>
                </fieldset>
                {/* Responsiblity*/}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <fieldset className="fieldset">
                        <textarea className="textarea h-24" name='responsibilities' placeholder="Job Responsibilities(separate by comma)"></textarea>
                    </fieldset>
                </fieldset>
                {/* HR information */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR Info</legend>
                    {/* Hr name  */}
                    <label className="label">HR Name </label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    {/* HR email */}

                    <label className="label">HR Email</label>
                    <input type="text" defaultValue={user?.email} name='hr_email' className="input" placeholder="HR Email" />
                    </fieldset>
                    <input type="submit" className='btn btn-warning w-[325px]' value="Submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddJob;