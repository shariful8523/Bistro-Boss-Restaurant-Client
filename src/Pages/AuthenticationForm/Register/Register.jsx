import React, {  useContext } from 'react';
import img from '../../../assets/others/ar.png';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Img1 from '../../../assets/others/authentication.png'
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import GoogleLogin from '../GoogleLogin/GoogleLogin';





const Register = () => {

    const { createUser, logOutUser, setJustRegister } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handelRegister = (e) => {
        e.preventDefault();
        const name = e.target.Name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);



        createUser(email, password)
            .then((result) => {

                const user = result.user;

                // update profile

                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {


                        // create user eatery in the database 
                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: photo,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {

                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'Registration Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Cool'
                                    });


                                    setJustRegister(true);

                                    logOutUser()
                                        .then(() => {

                                        })


                                    e.target.reset();

                                    navigate('/login')

                                }
                            })




                    })

            })
            .catch((error => {
                console.log(error.message)
            }))

    };


    


    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 " style={{
            backgroundImage:
                `url(${Img1})`,
        }}  >

            <Helmet>
                <title>Bistro Boss  || Register </title>
            </Helmet>


            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full grid lg:grid-cols-2 p-8 lg:p-16 gap-8" style={{
                backgroundImage:
                    `url(${Img1})`,
            }}>

                {/* Left: Form */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign up</h2>

                    <form onSubmit={handelRegister} className="space-y-4 w-full max-w-md mx-auto">
                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text text-base font-semibold">Name</span>
                            </label>
                            <input type="text" name='Name' placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        {/* photo url */}
                        <div>
                            <label className="label">
                                <span className="label-text text-base font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full" />
                        </div>

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
                            Sign up
                        </button>

                        {/* Already Registered */}
                        <p className="text-center mt-2 text-sm">
                            Already registered? <Link to={'/login'}><span className="text-yellow-600 font-semibold cursor-pointer">Go to log in</span></Link>
                        </p>

                        {/* Social Signup */}
                        <div className="divider">Or sign up with</div>
                        
                    </form>
                    <GoogleLogin></GoogleLogin>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center">
                    <img src={img} alt="Signup Illustration" className="w-full max-w-md  " />
                </div>
            </div>
        </div>
    );
};

export default Register;
