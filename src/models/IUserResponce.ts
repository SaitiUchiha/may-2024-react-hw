import IUser from "./IUser";

export interface IUserResponce {
    "users": IUser[]
    "total": number,
    "skip": number,
    "limit": number
}