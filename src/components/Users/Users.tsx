import React, {FC, useEffect} from 'react';
import {getUsers} from "../../services/api.services";


const Users:FC = () => {



    useEffect(() => {
        getUsers().then(value =>  console.log(value));

    }, []);



    return (
        <div>


        </div>
    );
};

export default Users;