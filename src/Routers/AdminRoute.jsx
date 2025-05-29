import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = (children) => {

    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();



    if (loading || isAdminLoading) {
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
    if (user && isAdmin) {
        return children
    }
    return (
        <Navigate to='/login' state={{ from: location }} replace >

        </Navigate>
    );
};

export default AdminRoute;