import {useStore} from "../store";
import React, {useEffect} from "react";
import {getPosts} from "../services/api.service";
import {IPost} from "../models/IPost";

const PostsPage = () => {

    let {postSlice: {allPosts, loadPosts}} = useStore();
    useEffect(() => {
        getPosts().then(value => loadPosts(value));
    }, []);

    return (
        <div>
            {
                allPosts.map((post:IPost) =>
                    <div>
                        <h3>User Id {post.userId}</h3>
                        <h2>{post.id} {post.title}</h2>
                        <p>{post.body}</p>
                    </div>)
            }
        </div>

    )
}

export default PostsPage;