import register from '../../assets/Animation - 1748441579987.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {

    const {createUser} = useAuth()

    

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <Lottie className='w-[350px]' animationData={register} loop={true}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            {/* email field  */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password"
                                name='password'
                                className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;