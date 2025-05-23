import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Vortex } from "react-loader-spinner";

const PrivateRoutes = ({children}) => {
    const {user, loading }= useContext(AuthContext)
    const location = useLocation();


     
    if(loading){
        return <div className=" w-11/12  flex justify-center items-center">
                        <Vortex
                            visible={true}
                            height="800"
                            width="100"
                            ariaLabel="vortex-loading"
                            wrapperStyle={{}}
                            wrapperClass="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        />
                    </div>
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={{from: location}} replace >
            
        </Navigate>
    );
};

export default PrivateRoutes;