import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import Home from "./Home";
import NotFound from "./NotFound";
import Layout from "./Layout";
import SinglePage from "./SinglePage";
import BlogPage from "./BlogPage";
import EditPage from "./EditPage";
import RequiredAuth from "../hoc/RequiredAuth";
import AuthProvider from "../hoc/AuthProvider";

const AppRouter = () => {


    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'login'} element={<Login/>}/>
                        <Route path={'chat'} element={<Chat/>}/>
                        <Route path={'chat'} element={<Navigate to={'/chat'} replace/>}/>
                        <Route path={'posts'} element={<BlogPage/>}/>
                        <Route path={'posts/:id'} element={<SinglePage/>}/>
                        <Route path={'posts/:id/edit'} element={<RequiredAuth>
                            <EditPage/>
                        </RequiredAuth>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </>

    )
};

export default AppRouter;