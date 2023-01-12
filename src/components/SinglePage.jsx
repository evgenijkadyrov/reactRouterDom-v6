import React from 'react';
import {
    Await,
    defer,
    Link,
    useAsyncValue,
    useLoaderData,
    useNavigate
} from "react-router-dom";

const Post=()=>{
    const post=useAsyncValue()
    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p></>
}
const SinglePage = () => {

    const {id, post} = useLoaderData()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <React.Suspense fallback={<h1>Loading.....</h1>}>
               <Await resolve={post}>
                   <Post/>
               </Await>
           </React.Suspense>

            <Link to={`/posts/${id}/edit`}>
                <button>Edit post</button>
            </Link>


        </div>
    );
};
async function getSinglePost(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   return res.json()

}
export const singlePageLoader = async ({params}) => {
    const id =params.id
    return {post:getSinglePost(id),id}
}
export default SinglePage;