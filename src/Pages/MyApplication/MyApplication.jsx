import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import UseApplicationApi from '../../Api/UseApplicationApi';

const MyApplication = () => {
    const { user } = useAuth();
    const { myApplicationPromise} = UseApplicationApi();
    // er por ei  tare promise er jaighai replace kore daw 
    
    // 1.sende token to the  prmoise . 2. go promise file 
    // console.log('token', user.accessToken)
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense>
                <ApplicationList applicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;