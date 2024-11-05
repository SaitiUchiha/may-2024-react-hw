import React, {useEffect} from "react";
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import UserComponent from "../user/UserComponent";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {loadUsers} from "../../redux/slices/userSlice";


const UsersComponent = () => {

    let userSliceState = useAppSelector(state => state.userSliceItself);

    let dispatch = useAppDispatch()


    useEffect(() => {
        getUsers().then(value => {
            dispatch(loadUsers(value));
            // dispatch(removeUser(1));
        })
    }, []);

    return (
        <div>
            {
                userSliceState.users.map((user: IUser) =><UserComponent key={user.id} user={user}/>)
            }
        </div>

    )
}

export default UsersComponent;