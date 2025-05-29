import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";
import { axiosPublic } from "../../../Hooks/useAxiosPublic";

const GoogleLogin = () => {

    const { googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleLogIn()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    email: user.email,
                    name: user.displayName,
                    photoURL: user.photoURL,
                };
               
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Login Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                        navigate('/');
                    });
            })

    

};

return (
    <div>
        <div className="flex justify-center space-x-4 text-xl">
            <button className="btn btn-outline rounded-full p-3"><FaFacebookF /></button>
            <button onClick={handleGoogle} className="btn btn-outline rounded-full p-3"><FaGoogle /></button>
            <button className="btn btn-outline rounded-full p-3"><FaGithub /></button>
        </div>
    </div>
);
};

export default GoogleLogin;
