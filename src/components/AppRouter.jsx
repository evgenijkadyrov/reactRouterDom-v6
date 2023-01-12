import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import Home from "./Home";
import NotFound from "./NotFound";
import Layout from "./Layout";
import SinglePage from "./SinglePage";
import BlogPage from "./BlogPage";
import Blog from "./Blog";
import EditPage from "./EditPage";

const AppRouter = () => {


    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={'chat'} element={<Chat/>}/>
                    <Route path={'posts'} element={<BlogPage/>}/>
                    <Route path={'posts/:id'} element={<SinglePage/>}/>
                    <Route path={'posts/:id/edit'} element={<EditPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </>

    )
};

export default AppRouter;