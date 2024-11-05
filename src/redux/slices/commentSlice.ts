import {IComment} from "../../models/IComment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CommentSliceType = {
    comments: IComment[],
    comment: IComment | null
}

const commentInitialState: CommentSliceType = {
    comments: [],
    comment: null
}

export const commentSlice = createSlice({
    name: 'commentSliceName',
    initialState: commentInitialState,
    reducers: {
        loadComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        },
        loadComment: (state, action: PayloadAction<IComment>) => {
            state.comment = action.payload;
        },
        removeComment: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            let comments = state.comments.splice(id - 1, 1);
            state.comments = comments;
        }
    }
});
export let {loadComment, loadComments, removeComment} = commentSlice.actions