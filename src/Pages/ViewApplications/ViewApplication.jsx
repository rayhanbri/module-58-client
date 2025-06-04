import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useLoaderData, useParams } from 'react-router';
import axios from 'axios';

const ViewApplication = () => {
    const { id } = useParams();
    const applications = useLoaderData();
    // console.log(applications)

   const handleOnChange = (e,_id) => {
    const value = e.target.value;
    // console.log(value,_id)

    axios.patch(`http://localhost:3000/applications/${_id}`,{status : value})
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        console.log(error)
    })
   }
    return (
        <div>
            <Navbar></Navbar>
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
                                    <select onChange={e => handleOnChange(e,app._id)} defaultValue="Pick a font" className="select select-ghost">
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
            <Footer></Footer>
        </div>
    );
};

export default ViewApplication;