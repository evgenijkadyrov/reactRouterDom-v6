import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import '../App.css'
import CustomLink from "./CustomLink";

const Layout = () => {
    return (<>
            <header className={'header'}>
                <CustomLink to={'/'} >Home</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
                <CustomLink to={'/chat'} >Chat</CustomLink>
                <CustomLink to={'/posts'} >Blog</CustomLink>
            </header>
            <Outlet/>
            <footer>2023</footer>
    </>

    );
};

export default Layout;