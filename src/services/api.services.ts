import axios from "axios";
import {BaseResponceType} from "../components/models/BaseResponceType";
import IUser from "../components/models/IUser";

const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com',
});

export const getUsers = async ():Promise<IUser[]> => {
    let {data:{users}} =await axiosInstance.get<BaseResponceType & {users:IUser[]}>('/users');
    return users;
}