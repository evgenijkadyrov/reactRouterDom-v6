import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const RequiredAuth = ({children}) => {

    const {user}=useAuth()
    const location=useLocation()
    if(!user){

       return <Navigate to={'/login'} state={{from:location}}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default RequiredAuth;