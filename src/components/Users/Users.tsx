import React, {FC, useEffect, useState} from 'react';
import IUser from "../../models/IUser";
import User from "../User/User";
import {getUsers} from "../../services/api.services";

type IUsersProps = {
    clickHandler:(id:number) => void
}

const Users:FC<IUsersProps> = ({clickHandler}) => {

    const [users, setUsers] = useState<IUser[]>([]);



    useEffect(() => {
        getUsers()
            .then(axiosResponse => setUsers(axiosResponse));

    }, []);






    return (
        <div>
            {
                users.map((user: IUser, index) =>
                    <User key={index} user={user} clickHandler={clickHandler}></User>)
            }

        </div>
    );
};

export default Users;