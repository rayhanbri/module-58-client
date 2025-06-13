import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axoisInstance = axios.create({
    baseURL: 'https://module-58-server-omega.vercel.app'
    // ekhane slash diye felle ar onno jaighai dewa lagbe na 
    // niche kaj kore asho 
})

const useAxiosSecure = () => {
    const {user,signOutUser} = useAuth();

    axoisInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    // now add axios interceptor 
    axios.interceptors.response.use(response =>{
        return response;
    },error => {
        // console.log('error in interceptor ',error)
        if(error.status === 401 || error.status === 403){
            signOutUser()
            .then(()=>{
                console.log('sign out user for 401 status')
            })
            .catch(err => {
                console.log(err)
            })
        }
        return Promise.reject(error)
    }
)






    return axoisInstance;
    // er por useApplicationApi banao api er bitre 
};

export default useAxiosSecure;