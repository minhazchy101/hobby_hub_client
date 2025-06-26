import React, { use } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import TheLoad from '../Others.jsx/TheLoad';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user , loading} = use(AuthContext)
    if (loading) {
        return <TheLoad></TheLoad>
    }
    if (user) {
        return children
        
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;