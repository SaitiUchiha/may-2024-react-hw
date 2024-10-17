import React, {FC, useEffect} from 'react';
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