import React, { Suspense } from 'react';
import { jobPromise } from '../../Api/jobPromise';
import useAuth from '../../Hooks/useAuth';
import List from './List';



const PostedJob = () => {
    const {user} = useAuth()

    return (
        <div>
            <Suspense>
             <List jobPromise={jobPromise(user.email)}></List>
            </Suspense>
        </div>
    );
};

export default PostedJob;