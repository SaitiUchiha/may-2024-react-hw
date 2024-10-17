import React, {FC, useEffect, useState} from 'react';
import IUser from "../models/IUser";
import User from "../user/User";
import {getUsers} from "../../services/api.services";


const Users:FC = () => {



    useEffect(() => {
        getUsers().then(axiosResponse =>  console.log(axiosResponse));

    }, []);






    return (
        <div>


        </div>
    );
};

export default Users;