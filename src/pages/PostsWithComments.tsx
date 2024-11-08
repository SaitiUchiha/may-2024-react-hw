import React, {useEffect, useMemo, useState} from "react";
import {PostWithCommentsType} from "../models/PostWithCommentsType";
import PostWithComments from "../components/postWithComments/PostWithComments";
import {useAppSelector} from "../redux/store";


const PostsWithComments = () => {

    let {postSliceItself,commentSliceItself} = useAppSelector(state => state);


    const [postWithCommentsState, setPostWithCommentsState] = useState<PostWithCommentsType[]>([]);
    console.log(postSliceItself.posts);
    console.log(commentSliceItself.comments);

    const postsWithCommentsArray = useMemo(() => {
        return postSliceItself.posts.map(post => {
            return {...post, comments: commentSliceItself.comments.filter(comment => comment.postId === post.id)};

        })
    }, [postSliceItself, commentSliceItself]);

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