import React, {FC} from "react";
import {IPost} from "../../models/IPost";

interface IPorps{
    post:IPost
}

const PostComponent:FC<IPorps> = ({post}) => {
    return (
        <div>
            <h3>User Id {post.userId}</h3>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </div>

    )
}

export default PostComponent;