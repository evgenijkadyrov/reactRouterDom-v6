import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const ErrorElement = () => {
    const error=useRouteError()

 if(isRouteErrorResponse(error)){
    return (
        <div>
            <h1>{error.status}</h1>
            <h1>{error.data.message||'Something wrong'}</h1>
            <h1>{error.data.reason}</h1>
        </div>
    )} else {
     return <div>Oops</div>};
};

export default ErrorElement;