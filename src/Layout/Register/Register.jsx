import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provaider/AuthProvaider";


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handelReagister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=> 
            console.error(error))
    }







    return (
        <div className='flex justify-center items-center mx-auto'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Registration
                    </h3>
                </div>
                <form onSubmit={handelReagister} className="flex flex-col gap-4 p-6">
                    <input type="text" placeholder="Name" name='name' className="input input-bordered input-secondary w-full max-w-xs bg-white" />
                    <input type="email" placeholder="email" name='email' className="input input-bordered input-secondary w-full max-w-xs bg-white" />

                    <input type="password" placeholder="password" name='password' className="input input-bordered input-secondary w-full max-w-xs bg-white" />


                    <button
                        className="block w-full btn btn-secondary"
                        type="submit"
                    >
                        Registration
                    </button>

                </form>
                <div className="p-6 pt-0">
                    <div className="flex justify-center mx-auto m-5 gap-4">
                        <FcGoogle></FcGoogle>
                        <FaFacebook className="text-[#1877F2]"></FaFacebook>
                        <FaTwitter className="text-[#1DA1F2]"></FaTwitter>

                    </div>
                    <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                        Already have an account?

                        <Link className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased" to={"/login"}>Login</Link>
                    </p>
                </div>
            </div>

        </div >
    );
};

export default Register;