import React, {FC} from "react";
import {IUser} from "../../models/IUser";

interface IPorps{
    user:IUser
}

const UserComponent:FC<IPorps> = ({user}) => {
    return (
        <div>
            <h2>{user.id} {user.name}</h2>
            <h3>{user.username} {user.email}</h3>
            <h3>{user.phone}</h3>
            <h3>{user.website}</h3>
            <h3>Address: </h3>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>Zip Code: {user.address.zipcode}</p>
            <p>Geo</p>
            <p>lat: {user.address.geo.lat}</p>
            <p>lng: {user.address.geo.lng}</p>
            <h3>Company:</h3>
            <p>Company Name: {user.company.name}</p>
            <p>Company Catch Phrase: {user.company.catchPhrase}</p>
            <p>Company BS: {user.company.bs}</p>
        </div>

    )
}

export default UserComponent;