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
const Comments=()=>{
    return(
        <div>
            <h2>Comments</h2>
            <p>Mike from Canada</p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque corporis delectus doloremque dolores ea eum illo laborum libero, molestiae nihil obcaecati perferendis, placeat possimus quis, quos repellat tempora temporibus.</span>
            <p>KODSd from Canada</p>
            <span>Lorem ipsum dolor sit s, quos repellat tempora temporibus.</span>

        </div>
    )
}
const SinglePage = () => {

    const {id, post, comments} = useLoaderData()
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
            <React.Suspense fallback={<p>Comments is loading.....</p>}>
                <Await resolve={comments}>
                    <Comments/>
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
async function getComments(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return res.json()

}
export const singlePageLoader = async ({params}) => {
    const id =params.id
    return defer({post: await getSinglePost(id),
        id,
        comments:getComments()})
}
export default SinglePage;