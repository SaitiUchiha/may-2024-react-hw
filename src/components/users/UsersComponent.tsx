import React, {useEffect} from "react";
import {IUser} from "../../models/IUser";
import UserComponent from "../user/UserComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userSliceActions} from "../../redux/slices/userSlice";


const UsersComponent = () => {

    let {users, user} = useAppSelector(state => state.userSliceItself);

    let dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
        // dispatch(userSliceActions.loadUser(1));
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) =><UserComponent key={user.id} user={user}/>)
            }
            {/*{*/}
            {/*    user && <div>{JSON.stringify(user)}</div>*/}
            {/*}*/}
        </div>

    )
}

export default UsersComponent;