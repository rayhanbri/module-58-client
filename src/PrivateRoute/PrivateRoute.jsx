import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,loading} = useAuth();
    const location = useLocation()

    // console.log(location.pathname)
    if(loading){
        return <h1>loading</h1>
    }

    if(!user){
      return  <Navigate to='/signin' state={location.pathname}></Navigate>
    }

    return children
    
};

export default PrivateRoute;