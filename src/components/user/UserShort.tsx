import React, {FC, ReactNode} from "react";
import IUser from "../models/IUser";
import {Link} from "react-router-dom";

type UserProps = {
    item: IUser;
}

const UserShort: FC<UserProps> = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()}><h2>{item.id} - {item.firstName} {item.maidenName} {item.lastName}
            </h2></Link>
            <img src={item.image} alt={item.username}/>
            <p>Age: {item.age}</p>
            <p>Birth Date: {item.birthDate}</p>
            <p>{item.gender}</p>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Password: {item.password}</p>
            <p>Phone: {item.phone}</p>
        </div>

    )
}

export default UserShort;