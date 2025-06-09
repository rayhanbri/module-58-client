import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import { applicationPromise } from '../../Api/applicationPromise';
import useAuth from '../../Hooks/useAuth';

const MyApplication = () => {
    const { user } = useAuth();

    console.log('token', user.accessToken)
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense>
                <ApplicationList applicationPromise={applicationPromise(user.email,user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;