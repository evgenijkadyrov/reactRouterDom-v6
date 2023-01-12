import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Chat = () => {
    return (
        <div>
            <div>Chat</div>
            <Link to={'settings'}>Settings</Link>
            <Link to={'profile'}>Profile</Link>
            <Outlet/>
        </div>
    );
};

export default Chat;