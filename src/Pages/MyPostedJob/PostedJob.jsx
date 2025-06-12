import React, { Suspense } from 'react';
import { jobPromise } from '../../Api/jobPromise';
import useAuth from '../../Hooks/useAuth';
import List from './List';



const PostedJob = () => {
    const {user} = useAuth()

    // eikhane acces token set korbo 
    console.log(user.accessToken)

    return (
        <div>
            <Suspense>
             <List jobPromise={jobPromise(user.email,user.accessToken)}></List>
            </Suspense>
        </div>
    );
};

export default PostedJob;