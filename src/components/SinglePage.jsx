import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";


const SinglePage = () => {
    const {id}=useParams()
    const [state,setState]=useState(null)
    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>res.json())
            .then(data=>setState(data))
    },[id])
    return (
        <div>
            {state &&(
                <>
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