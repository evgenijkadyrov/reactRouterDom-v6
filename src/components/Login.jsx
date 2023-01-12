import React from 'react';
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const Login = () => {

    const navigate=useNavigate()
    const location =useLocation()
    const {signin,user}=useAuth()
    const fromPage=location.state?.from?.pathname ||'/'
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target
        const user=form.username.value
        signin(user, ()=>navigate(fromPage, {replace:true}))
    }
    if(user){
       return <Navigate to={'/'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name <input name={'username'}/>
                </label>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    );
};

export default Login;