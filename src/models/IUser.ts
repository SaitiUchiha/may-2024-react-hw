import {IHair} from "./IHair";
import {IAdress} from "./IAdress";
import {IBank} from "./IBank";
import {ICompany} from "./ICompany";
import {ICrypto} from "./ICrypto";

export default interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: number,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    ip: number,
    address: IAdress,
    macAddress: string,
    university: string,
    bank: IBank,
    company: ICompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: ICrypto,
    role: string
}