import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type UserSliceType = {
    users: IUser[],
    user: IUser | null
}

const userInitialState: UserSliceType = {
    users: [],
    user: null
}

export const userSlice = createSlice({
    name: 'userSliceName',
    initialState: userInitialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
        loadUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        removeUser: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            let users = state.users.splice(id - 1, 1);
            state.users = users;
        }
    }
});
export let {loadUser, loadUsers, removeUser} = userSlice.actions