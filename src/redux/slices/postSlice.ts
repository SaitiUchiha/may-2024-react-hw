import {IPost} from "../../models/IPost";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = {
    posts: IPost[],
    post: IPost | null
}

const postInitialState: PostSliceType = {
    posts: [],
    post: null
}

export const postSlice = createSlice({
    name: 'postSliceName',
    initialState: postInitialState,
    reducers: {
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        },
        loadPost: (state, action: PayloadAction<IPost>) => {
            state.post = action.payload;
        },
        removePost: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            let posts = state.posts.splice(id - 1, 1);
            state.posts = posts;
        }
    }
});
export let {loadPost, loadPosts, removePost} = postSlice.actions