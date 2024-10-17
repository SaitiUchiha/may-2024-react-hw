import React, {FC} from "react";
import IUser from "../models/IUser";

type UserFullProps ={
    item: IUser;
}

const UserFull:FC<UserFullProps> = ({item}) => {
  return (
      <div>
          <h2>{item.id} - {item.firstName} {item.maidenName} {item.lastName}
          </h2>
          <img src={item.image} alt={item.username}/>
          <p>Age: {item.age}</p>
          <p>Birth Date: {item.birthDate}</p>
          <p>{item.gender}</p>
          <p>Username: {item.username}</p>
          <p>Email: {item.email}</p>
          <p>Password: {item.password}</p>
          <p>Phone: {item.phone}</p>
          <p>BloodType: {item.bloodGroup}</p>
          <p>Height: {item.height}</p>
          <p>Weight: {item.weight}</p>
          <p>EyeColor: {item.eyeColor}</p>
          <h4>Hair:</h4>
          <p>Type: {item.hair.type}</p>
          <p>Color: {item.hair.color}</p>
          <p>IP: {item.ip}</p>
          <h4>Address:</h4>
          <p>Address: {item.address.address}</p>
          <p>City: {item.address.city}</p>
          <p>State: {item.address.state}</p>
          <p>Country: {item.address.country}</p>
          <p>Postal Code: {item.address.postalCode}</p>
          <p>State Code: {item.address.stateCode}</p>
          <h4>Coordinates:</h4>
          <p>Lat: {item.address.coordinates.lat}</p>
          <p>Lng: {item.address.coordinates.lng}</p>
          <p>MacAddress: {item.macAddress}</p>
          <p>University: {item.university}</p>
          <h4>Bank:</h4>
          <p>iban: {item.bank.iban}</p>
          <p>Currency: {item.bank.currency}</p>
          <p>Card Type: {item.bank.cardType}</p>
          <p>Card Number: {item.bank.cardNumber}</p>
          <p>Card Expiration Date: {item.bank.cardExpire}</p>
          <h4>Company:</h4>
          <p>Title: {item.company.title}</p>
          <p>Company Address:</p>
          <p>Address: {item.company.address.address}</p>
          <p>City: {item.company.address.city}</p>
          <p>State: {item.company.address.state}</p>
          <p>Country: {item.company.address.country}</p>
          <p>Postal Code: {item.company.address.postalCode}</p>
          <p>State Code: {item.company.address.stateCode}</p>
          <p>EIN: {item.ein}</p>
          <p>SSN: {item.ssn}</p>
          <p>User Agent: {item.userAgent}</p>
          <h4>Crypto:</h4>
          <p>Coin: {item.crypto.coin}</p>
          <p>Network: {item.crypto.network}</p>
          <p>Wallet: {item.crypto.wallet}</p>
          <p>Role: {item.role}</p>
      </div>

  )
}

export default UserFull;