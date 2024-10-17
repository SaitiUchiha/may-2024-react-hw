import React, {FC, useEffect, useState} from 'react';
import {getUsers} from "../../services/api.services";
import IUser from "../models/IUser";
import User from "../user/UserShort";
import UserShort from "../user/UserShort";


const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value =>  setUsers(value));

    }, []);



    return (
        <div>
            {users.map((user: IUser, index) =>
                <UserShort key={index} item={user}></UserShort>)}
        </div>
    );
};

export default UsersComponent;