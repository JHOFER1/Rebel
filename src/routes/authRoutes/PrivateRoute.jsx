import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../../config/router/paths';
import { useAuthContext } from '../../context/authContex';
import { Navbar } from '../../components/common/navbar';


export default function PrivateRoute() {
    const { isAuthenticated, role } = useAuthContext();

    if (isAuthenticated && role === 'client') {
        return (
            <div>
                <Outlet />
                <Navbar/>

            </div>
        );
    }
    else {
        return <Navigate to='/' />;
    }

}
