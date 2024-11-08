import {IUser} from "../../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getUser, getUsers} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[],
    user: IUser | null
}

const userInitialState: UserSliceType = {
    users: [],
    user: null
}

let loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    try {
        let usersFromApi = await getUsers()
        return thunkAPI.fulfillWithValue(usersFromApi);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

let loadUser = createAsyncThunk('userSlice/loadUser', async (id: number, thunkAPI) => {
    try {
        let userFromApi = await getUser(id)
        return thunkAPI.fulfillWithValue(userFromApi);
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
})

export const userSlice = createSlice({
    name: 'userSliceName',
    initialState: userInitialState,
    reducers: {
        removeUser: (state, action: PayloadAction<number>) => {
            let id = action.payload;
            // let users = state.users.splice(id - 1, 1);
            let users = state.users.filter(user => user.id !== id);
            state.users = users;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<AxiosError|unknown>) => {console.log(action.payload);})
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.user = action.payload;
            })
            .addCase(loadUser.rejected, (state, action: PayloadAction<AxiosError|unknown>) => {console.log(action.payload);})
            .addMatcher(isRejected(loadUsers, loadUser), (state, action)=>{console.log(action.payload);})
});
export const {removeUser} = userSlice.actions;
export const userSliceActions = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}