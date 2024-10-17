import React, {FC, useEffect, useState} from 'react';
import {getUsers} from "../../services/api.services";
import IUser from "../models/IUser";
import User from "../user/user";


const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value =>  setUsers(value));

    }, []);



    return (
        <div>
            {users.map((user: IUser, index) =>
                <User key={index} item={user}></User>)}
        </div>
    );
};

export default UsersComponent;