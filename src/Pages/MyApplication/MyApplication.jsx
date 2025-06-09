import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import { applicationPromise } from '../../Api/applicationPromise';
import useAuth from '../../Hooks/useAuth';

const MyApplication = () => {
    const { user } = useAuth();
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense>
                <ApplicationList applicationPromise={applicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;