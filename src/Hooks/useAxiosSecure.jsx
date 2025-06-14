import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOutUser} =useAuth();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config; 
    }, function (error) {
        return Promise.reject(error);
    });

    // intercepts 401 and 403 status

    axiosSecure.interceptors.response.use(function(response) {
        return response;
    },  async (error) => {
        const status = error.response.status;
        // console.log('error in the interceptor', status)
        if(status === 401 || status === 403){
            await logOutUser();
            navigate('/login')
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;