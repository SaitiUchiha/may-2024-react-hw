import React, {useEffect} from "react";
import {getPosts} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostComponent from "../post/PostComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {loadPosts} from "../../redux/slices/postSlice";


const PostsComponent = () => {
    let postSliceState = useAppSelector(state => state.postSliceItself);

    let dispatch = useAppDispatch()


    useEffect(() => {
        getPosts().then(value => {
            dispatch(loadPosts(value));
            // dispatch(removeUser(1));
        })
    }, []);

    return (
        <div>
            {
                postSliceState.posts.map((post:IPost) => <PostComponent post={post} key={post.id} />)
            }
        </div>

    )
}

export default PostsComponent;