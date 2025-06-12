import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axoisInstance = axios.create({
    baseURL: 'http://localhost:3000'
    // ekhane slash diye felle ar onno jaighai dewa lagbe na 
    // niche kaj kore asho 
})

const useAxiosSecure = () => {
    const {user} = useAuth();

    axoisInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    return axoisInstance;
    // er por useApplicationApi banao api er bitre 
};

export default useAxiosSecure;