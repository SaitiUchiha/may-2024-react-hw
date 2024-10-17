import React, {FC, useEffect, useState} from "react";
import {IPost} from "../models/IPost";
import {getPosts} from "../../services/api.services";
import PostShort from "../Post/PostShort";


const PostsComponent:FC = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value =>  setPosts(value));

    }, []);



    return (
        <div>
            {posts.map((post: IPost, index) =>
                <PostShort key={index} item={post}></PostShort>)}
        </div>
    );
};

export default PostsComponent;