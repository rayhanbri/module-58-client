import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

   const  authInfo= {
        name:'rayhan'
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;