import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvaider'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa6";;




const Login = () => {

    const { SignInUser, signInGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        SignInUser(email, password)
            .then(result =>{
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error =>
                console.error(error))


    };

    const handelGoogleSignIn= (e) => {
        signInGoogle()
        .then(result =>{
            console.log(result.user)

        })
        .catch(error => console.error(error))
    }





    return (
        <div className='flex justify-center items-center mx-auto'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Log In
                    </h3>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 p-6">
                    <input type="email" placeholder="Email" name="email" className="input input-bordered input-secondary w-full max-w-xs bg-white" />
                    <input type="password" placeholder="Password" name="password" className="input input-bordered input-secondary w-full max-w-xs bg-white" />
                    <button
                        className="block w-full btn btn-secondary"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
                <div className="flex justify-center mx-auto m-5 gap-4">
                        <FcGoogle onClick={signInGoogle}></FcGoogle>
                        <FaFacebook className="text-[#1877F2]"></FaFacebook>
                        <FaTwitter className="text-[#1DA1F2]"></FaTwitter>

                    </div>
                <div className="p-6 pt-0">
                    <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                        Don't have an account?
                        <Link className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased" to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
