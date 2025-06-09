import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebaseInit';
import axios from 'axios';



const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            if(currentUser?.email){
                const userData = {email:currentUser.email}
                axios.post('http://localhost:3000/jwt',userData)
                .then(res => {
                    console.log('token after jwt',res.data.token)
                })
                .catch(error => {
                    console.log(error)
                })
            }
            // console.log('user in the auth state change', currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const provider = new GoogleAuthProvider();

    const signInWithGoogle  = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }


    const authInfo = {
        createUser,
        loading,
        signInUser,
        user,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;