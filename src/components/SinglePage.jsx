import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";


const SinglePage = () => {
    const {id}=useParams()
    const [state,setState]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>res.json())
            .then(data=>setState(data))
    },[id])
    const goBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            {state &&(
                <>
                    <button onClick={goBack}>Go back</button>
                <h1>{state.title}</h1>
                <p>{state.body}</p>

                    <Link to={`/posts/${id}/edit`}>
                        <button>Edit post</button>
                    </Link>
                </>
                )}

        </div>
    );
};

export default SinglePage;