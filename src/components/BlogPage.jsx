import React from 'react';
import {Await, defer, Link, useLoaderData, useSearchParams} from "react-router-dom";
import BlogFilter from "./BlogFilter";

const BlogPage = () => {
    const {posts} = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ''
    const latest = searchParams.has('latest')
    const startFrom = latest ? 80 : 1

    return (
        <div>
            <h1>Our news</h1>
            <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery}
                        latest={latest}/>
            <React.Suspense fallback={<h2>Loading...</h2>}>

                <Await resolve={posts} errorElement={<p>Error loading</p>}>{
                    (posts) => (<> {posts.filter(post => post.title.includes(postQuery) && post.id >= startFrom).map(post => (
                            <Link key={post.id} to={`/posts/${post.id}`}>
                                <li>{post.title}</li>
                            </Link>)
                        )}</>
                    )
                }
                </Await>
            </React.Suspense>

        </div>
    );
};

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export const blogLoader = async () => {


    return defer({posts: getPosts()})

}
export default BlogPage;