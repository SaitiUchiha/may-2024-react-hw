import React, {FC} from "react";
import IUser from "../models/IUser";
import {Link} from "react-router-dom";

type UserProps = {
    obj: IUser;
}

const UserLong: FC<UserProps> = ({obj}) => {
    return (
        <div>
            <Link to={obj.id.toString()}><h2>{obj.id} - {obj.firstName} {obj.maidenName} {obj.lastName}
            </h2></Link>
            <img src={obj.image} alt={obj.username}/>
            <p>Age: {obj.age}</p>
            <p>Birth Date: {obj.birthDate}</p>
            <p>{obj.gender}</p>
            <p>Username: {obj.username}</p>
            <p>Email: {obj.email}</p>
            <p>Password: {obj.password}</p>
            <p>Phone: {obj.phone}</p>
            <h2>{obj.id} - {obj.firstName} {obj.maidenName} {obj.lastName}
            </h2>
            <img src={obj.image} alt={obj.username}/>
            <p>Age: {obj.age}</p>
            <p>Birth Date: {obj.birthDate}</p>
            <p>{obj.gender}</p>
            <p>Username: {obj.username}</p>
            <p>Email: {obj.email}</p>
            <p>Password: {obj.password}</p>
            <p>Phone: {obj.phone}</p>
            <p>BloodType: {obj.bloodGroup}</p>
            <p>Height: {obj.height}</p>
            <p>Weight: {obj.weight}</p>
            <p>EyeColor: {obj.eyeColor}</p>
            <h4>Hair:</h4>
            <p>Type: {obj.hair.type}</p>
            <p>Color: {obj.hair.color}</p>
            <p>IP: {obj.ip}</p>
            <h4>Address:</h4>
            <p>Address: {obj.address.address}</p>
            <p>City: {obj.address.city}</p>
            <p>State: {obj.address.state}</p>
            <p>Country: {obj.address.country}</p>
            <p>Postal Code: {obj.address.postalCode}</p>
            <p>State Code: {obj.address.stateCode}</p>
            <h4>Coordinates:</h4>
            <p>Lat: {obj.address.coordinates.lat}</p>
            <p>Lng: {obj.address.coordinates.lng}</p>
            <p>MacAddress: {obj.macAddress}</p>
            <p>University: {obj.university}</p>
            <h4>Bank:</h4>
            <p>iban: {obj.bank.iban}</p>
            <p>Currency: {obj.bank.currency}</p>
            <p>Card Type: {obj.bank.cardType}</p>
            <p>Card Number: {obj.bank.cardNumber}</p>
            <p>Card Expiration Date: {obj.bank.cardExpire}</p>
            <h4>Company:</h4>
            <p>Title: {obj.company.title}</p>
            <p>Company Address:</p>
            <p>Address: {obj.company.address.address}</p>
            <p>City: {obj.company.address.city}</p>
            <p>State: {obj.company.address.state}</p>
            <p>Country: {obj.company.address.country}</p>
            <p>Postal Code: {obj.company.address.postalCode}</p>
            <p>State Code: {obj.company.address.stateCode}</p>
            <p>EIN: {obj.ein}</p>
            <p>SSN: {obj.ssn}</p>
            <p>User Agent: {obj.userAgent}</p>
            <h4>Crypto:</h4>
            <p>Coin: {obj.crypto.coin}</p>
            <p>Network: {obj.crypto.network}</p>
            <p>Wallet: {obj.crypto.wallet}</p>
            <p>Role: {obj.role}</p>
        </div>

    )
}

export default UserLong;