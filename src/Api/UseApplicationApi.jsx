import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const UseApplicationApi = () => {
    const axiosSecure = useAxiosSecure();

    const myApplicationPromise =(email) => {
        return axiosSecure.get(`/applications?email=${email}`)
        .then(res => res.data)
    }

    return {
        myApplicationPromise
        // er por ei tare my application theke access korbo 
    }
};

export default UseApplicationApi;