import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useJobApi = () => {

    const axiosSecure = useAxiosSecure();


    const jobPromise = email => {
        return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
    }

    return {
        jobPromise
    }
};

export default useJobApi;