import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import BlogFilter from "./BlogFilter";

const BlogPage = () => {
    const [state,setState]=useState([])
    const[searchParams,setSearchParams]=useSearchParams()

const postQuery=searchParams.get('post')||''
    const latest=searchParams.has('latest')
    const startFrom=latest?80:1

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setState(data))
    },[])

    return (
        <div>
            <h1>Our news</h1>
           <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery} latest={latest}/>
            {state.filter(post=>post.title.includes(postQuery) && post.id>=startFrom).map(post=>(
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>)
            )}
        </div>
    );
};

export default BlogPage;