import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route, RouterProvider,
    Routes
} from "react-router-dom";
import Login from "./Login";
import Chat from "./Chat";
import Home from "./Home";
import NotFound from "./NotFound";
import Layout from "./Layout";
import SinglePage, {singlePageLoader} from "./SinglePage";
import BlogPage, {blogLoader} from "./BlogPage";
import EditPage from "./EditPage";
import RequiredAuth from "../hoc/RequiredAuth";
import AuthProvider from "../hoc/AuthProvider";
import ErrorElement from "./ErrorElement";
import CreatePost from "./CreatePost";

const router=createBrowserRouter(createRoutesFromElements(

        <Route path={'/'} element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'chat'} element={<Chat/>}>
                <Route path={'settings'} element={<p>Settings</p>}/>
                <Route path={'profile'} element={<p>Profile</p>}/>
            </Route>
            <Route path={'chat'} element={<Navigate to={'/chat'} replace/>}/>

            <Route path={'posts'} element={<BlogPage/>} loader={blogLoader} errorElement={<ErrorElement/>}/>
            <Route path={'posts/:id'} element={<SinglePage/>} loader={singlePageLoader}/>
            <Route path={'posts/:id/edit'} element={<RequiredAuth> <EditPage/> </RequiredAuth>}/>
            <Route path={'posts/newPost'} element={<RequiredAuth> <CreatePost/> </RequiredAuth>}/>
            <Route path={'*'} element={<NotFound/>}/>
        </Route>

))

const AppRouter = () => {

    return (
        <>
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </>

    )
};

export default AppRouter;