import React, {useEffect} from "react";
import {IPost} from "../../models/IPost";
import PostComponent from "../post/PostComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postSliceActions} from "../../redux/slices/postSlice";


const PostsComponent = () => {
    let {posts} = useAppSelector(state => state.postSliceItself);

    let dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(postSliceActions.loadPosts());
    }, []);

    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent post={post} key={post.id} />)
            }
        </div>

    )
}

export default PostsComponent;