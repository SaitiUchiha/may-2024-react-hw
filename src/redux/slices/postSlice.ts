import {IPost} from "../../models/IPost";
import {createAsyncThunk, createSlice, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getPosts} from "../../services/api.service";

type PostSliceType = {
    posts: IPost[],
    post: IPost | null
}

const postInitialState: PostSliceType = {
    posts: [],
    post: null
}

let loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        let postsFromApi = await getPosts()
        return thunkAPI.fulfillWithValue(postsFromApi);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const postSlice = createSlice({
    name: 'postSliceName',
    initialState: postInitialState,
    reducers: {
        removePost: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            let posts = state.posts.splice(id - 1, 1);
            state.posts = posts;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action: PayloadAction<any>) => {console.log(action.payload);})
            .addMatcher(isRejected(loadPosts), (state, action)=>{console.log(action.payload);})
});
export let {removePost} = postSlice.actions;
export const postSliceActions = {
    ...postSlice.actions,
    loadPosts
}