import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useLoaderData, useParams } from 'react-router';

const ViewApplication = () => {
    const{ id }= useParams();
    const applications = useLoaderData();
    console.log(applications)
    return (
        <div>
            <Navbar></Navbar>
            view:{id}
            <br />
            Total Application:{applications.length}
            <Footer></Footer>
        </div>
    );
};

export default ViewApplication;