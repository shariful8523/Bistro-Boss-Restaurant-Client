import React, { useContext } from 'react';
import img from '../../../assets/others/ar.png';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Img1 from '../../../assets/others/authentication.png';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {


    const { loginUser, setJustRegister } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handelLogin = (e) => {
        e.preventDefault();



        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                setJustRegister(false);
                Swal.fire({
                    title: 'Success!',
                    text: 'logIn Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
               navigate(from, {replace: true});
            })




    }

    





    return (
        <div
            className="min-h-screen flex items-center justify-center bg-base-200 px-4"
            style={{ backgroundImage: `url(${Img1})` }}
        >

            <Helmet>
                <title>Bistro Boss  || Login </title>
            </Helmet>

            <div
                className="bg-white rounded-lg shadow-lg max-w-6xl w-full grid lg:grid-cols-2 p-8 lg:p-16 gap-8"
                style={{ backgroundImage: `url(${Img1})` }}
            >

                {/* Left: Image */}
                <div className="flex items-center justify-center">
                    <img src={img} alt="Signup Illustration" className="w-full max-w-md" />
                </div>

                {/* Right: Form */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

                    <form onSubmit={handelLogin} className="space-y-4 w-full max-w-md mx-auto">


                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full" />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn bg-yellow-600 hover:bg-yellow-700 text-white w-full mt-2">
                            Sign In
                        </button>

                        {/* Already Registered */}
                        <p className="text-center mt-2 text-sm">
                            New here?  <Link to={'/register'}><span className="text-yellow-600 font-semibold cursor-pointer">Create a New Account</span></Link>
                        </p>

                        {/* Social Signup */}
                        <div className="divider">Or sign up with</div>
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>

            </div>
        </div>
    );
};

export default Login;
