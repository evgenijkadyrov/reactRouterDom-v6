import React from 'react';
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import '../App.css'
import CustomLink from "./CustomLink";
import {useAuth} from "../hook/useAuth";

const Layout = () => {
    const {signout}=useAuth()
    const navigate=useNavigate()
    const handleLogOut=()=>{
        signout(()=>navigate('/',{replace:true}))
    }
    return (<>
            <header className={'header'}>
                <CustomLink to={'/'} >Home</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
                <CustomLink to={'/chat'} >Chat</CustomLink>
                <CustomLink to={'/posts'} >Blog</CustomLink>
                <button onClick={handleLogOut}>Log out</button>
            </header>
            <Outlet/>
            <footer>2023</footer>
    </>

    );
};

export default Layout;