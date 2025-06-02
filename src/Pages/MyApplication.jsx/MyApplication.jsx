import React, { Suspense } from 'react';
import ApplicatonStat from './ApplicatonStat';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import useAuth from '../../Hooks/useAuth';
import { applicationPromise } from '../../Api/applicationApi';
import ApplicationList from './ApplicationList';
// eta alada folder theke patabo just for large application sobhidha


const MyApplication = () => {
    const { user } = useAuth();
    return (
        <div>
            <Navbar></Navbar>
            <ApplicatonStat></ApplicatonStat>
            <Suspense fallback="loadin application">
                <ApplicationList applicationPromise={applicationPromise(user.email)}></ApplicationList>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default MyApplication;