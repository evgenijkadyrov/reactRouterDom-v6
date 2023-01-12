import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const BlogPage = () => {
    const [state,setState]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setState(data))
    },[])

    return (
        <div>
            <h1>Our news</h1>
            {state.map(post=>(
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>)
            )}
        </div>
    );
};

export default BlogPage;