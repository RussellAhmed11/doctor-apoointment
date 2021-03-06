import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';


const RequreAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location =useLocation();
    if(!user){
       return <Navigate to="/login" state={{ from: location }} replace />
    }
    if(loading){
        return <loading></loading>
    }
    return children;
};

export default RequreAuth;