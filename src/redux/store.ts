import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "./slices/userSlice";
import {postSlice} from "./slices/postSlice";
import {commentSlice} from "./slices/commentSlice";

export const store = configureStore({
    reducer:{
        userSliceItself:userSlice.reducer,
        postSliceItself:postSlice.reducer,
        commentSliceItself:commentSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<RootState>();