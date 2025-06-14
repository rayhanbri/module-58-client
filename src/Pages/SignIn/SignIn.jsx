import React from 'react';
import signin from "../../assets/22Animation - 1748446696787.json"
import useAuth from '../../Hooks/useAuth';
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router';


const SignIn = () => {

    const {signInUser} = useAuth()
    const location = useLocation()
    const from = location.state || '/'
    const redirect = useNavigate()

    // console.log(location)
    // console.log(from)

     const handleSignIn = e => {
            e.preventDefault()
            const form = e.target;
            const email = form.email.value;
             const password = form.password.value;
            // console.log(email,password)
    
            // createsuer 
            signInUser(email,password)
            .then(result => {
                console.log(result.user)
                redirect(from)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    return (
        <div className="hero bg-base-200 min-h-screen">Add commentMore actions
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie className='w-[350px]' animationData={signin} loop={true}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign In</h1>
                        {/* fort start here  */}
                        <form onSubmit={handleSignIn} className="fieldset">
                            {/* email field  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password"
                                name='password'
                                className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Sign In</button>
                        </form>
                        <SocialLogin from={from}></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;