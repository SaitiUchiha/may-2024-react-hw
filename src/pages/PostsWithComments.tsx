import React, {useEffect, useMemo, useState} from "react";
import {useStore} from "../store";
import {PostWithCommentsType} from "../models/PostWithCommentsType";
import PostWithComments from "../components/postWithComments/PostWithComments";


const PostsWithComments = () => {

    let {postSlice: {allPosts}, commentsSlice: {allComments}} = useStore();

    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([]);
    
    const postsWithCommentsArray = useMemo(() => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }, [allComments,allPosts]);

    useEffect(() => {
        setPostWithCommentsState(postsWithCommentsArray);
    },[postsWithCommentsArray])

    return (
        <div>
            <PostWithComments items={postWithCommentsState} />
        </div>
    )
}

export default PostsWithComments;