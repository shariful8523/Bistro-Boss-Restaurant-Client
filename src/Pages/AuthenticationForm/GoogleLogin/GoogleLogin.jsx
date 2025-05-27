import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";

const GoogleLogin = () => {

    const { googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleeGoogle = () => {

        googleLogIn()

            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL,
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {

                        console.log(res)
                        Swal.fire({
                            title: 'Success!',
                            text: 'Login  Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                        navigate('/')


                    })

            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            })

    }

    return (
        <div>
            <div className="flex justify-center space-x-4 text-xl ">
                <button className="btn btn-outline rounded-full p-3"><FaFacebookF /></button>
                <button onClick={handleeGoogle} className="btn btn-outline rounded-full p-3"><FaGoogle /></button>
                <button className="btn btn-outline rounded-full p-3"><FaGithub /></button>
            </div>
        </div>
    );
};

export default GoogleLogin;