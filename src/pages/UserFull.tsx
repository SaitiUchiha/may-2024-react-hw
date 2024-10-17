import React, {useEffect, useState} from "react";
import IUser from "../components/models/IUser";
import {useParams} from "react-router-dom";
import {getUser} from "../services/api.services";



const UserFull = () => {
        let {id} = useParams();
        const [user, setUser] = useState<IUser| null>(null);
        useEffect(() => {
                if (id){
                        getUser(id).then(value => setUser(value));
                }
        }, []);
  return (
      <div>
              <h2>{user?.id} - {user?.firstName} {user?.maidenName} {user?.lastName}
              </h2>
              <img src={user?.image} alt={user?.username}/>
              <p>Age: {user?.age}</p>
              <p>Birth Date: {user?.birthDate}</p>
              <p>{user?.gender}</p>
              <p>Username: {user?.username}</p>
              <p>Email: {user?.email}</p>
              <p>Password: {user?.password}</p>
              <p>Phone: {user?.phone}</p>
              <p>BloodType: {user?.bloodGroup}</p>
              <p>Height: {user?.height}</p>
              <p>Weight: {user?.weight}</p>
              <p>EyeColor: {user?.eyeColor}</p>
              <h4>Hair:</h4>
              <p>Type: {user?.hair.type}</p>
              <p>Color: {user?.hair.color}</p>
              <p>IP: {user?.ip}</p>
              <h4>Address:</h4>
              <p>Address: {user?.address.address}</p>
              <p>City: {user?.address.city}</p>
              <p>State: {user?.address.state}</p>
              <p>Country: {user?.address.country}</p>
              <p>Postal Code: {user?.address.postalCode}</p>
              <p>State Code: {user?.address.stateCode}</p>
              <h4>Coordinates:</h4>
              <p>Lat: {user?.address.coordinates.lat}</p>
              <p>Lng: {user?.address.coordinates.lng}</p>
              <p>MacAddress: {user?.macAddress}</p>
              <p>University: {user?.university}</p>
              <h4>Bank:</h4>
              <p>iban: {user?.bank.iban}</p>
              <p>Currency: {user?.bank.currency}</p>
              <p>Card Type: {user?.bank.cardType}</p>
              <p>Card Number: {user?.bank.cardNumber}</p>
              <p>Card Expiration Date: {user?.bank.cardExpire}</p>
              <h4>Company:</h4>
              <p>Title: {user?.company.title}</p>
              <p>Company Address:</p>
              <p>Address: {user?.company.address.address}</p>
              <p>City: {user?.company.address.city}</p>
              <p>State: {user?.company.address.state}</p>
              <p>Country: {user?.company.address.country}</p>
              <p>Postal Code: {user?.company.address.postalCode}</p>
              <p>State Code: {user?.company.address.stateCode}</p>
              <p>EIN: {user?.ein}</p>
              <p>SSN: {user?.ssn}</p>
              <p>User Agent: {user?.userAgent}</p>
              <h4>Crypto:</h4>
              <p>Coin: {user?.crypto.coin}</p>
              <p>Network: {user?.crypto.network}</p>
              <p>Wallet: {user?.crypto.wallet}</p>
              <p>Role: {user?.role}</p>
      </div>
  )
      ;
};

export default UserFull;