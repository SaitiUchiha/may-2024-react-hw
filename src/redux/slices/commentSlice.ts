import {IComment} from "../../models/IComment";
import {createAsyncThunk, createSlice, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getComments} from "../../services/api.service";

type CommentSliceType = {
    comments: IComment[],
    comment: IComment | null
}

const commentInitialState: CommentSliceType = {
    comments: [],
    comment: null
}

let loadComments = createAsyncThunk('commentSlice/loadComments', async (_, thunkAPI) => {
    try {
        let commentsFromApi = await getComments()
        return thunkAPI.fulfillWithValue(commentsFromApi);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const commentSlice = createSlice({
    name: 'commentSliceName',
    initialState: commentInitialState,
    reducers: {
        removeComment: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            let comment = state.comments.splice(id - 1, 1);
            state.comments = comment;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action: PayloadAction<any>) => {console.log(action.payload);})
            .addMatcher(isRejected(loadComments), (state, action)=>{console.log(action.payload);})
});
export let {removeComment} = commentSlice.actions;
export const commentSliceActions = {
    ...commentSlice.actions,
    loadComments
}