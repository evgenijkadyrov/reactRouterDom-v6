import React from 'react';
import {Form, useNavigate} from "react-router-dom";

const CreatePost = () => {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <div>Create post</div>

            <Form>

            </Form>
        </div>
    );
};

export default CreatePost;