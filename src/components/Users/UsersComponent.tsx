import React, {FC, useEffect} from 'react';
import {getUsers} from "../../services/api.services";


const UsersComponent:FC = () => {



    useEffect(() => {
        getUsers().then(value =>  console.log(value));

    }, []);



    return (
        <div>


        </div>
    );
};

export default UsersComponent;