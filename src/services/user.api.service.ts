import IUser from "../models/IUser";
import axios from "axios";
import {IUserResponce} from "../models/IUserResponce";
import {IPostResponce} from "../models/IPostResponce";


const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers:{'Content-Type': 'application/json'},
});

export const getUsers = async (): Promise<IUser[]> =>{
   let axiosResponse = await axiosInstance.get<IUserResponce>("/users");
    return axiosResponse.data.users
}

export const getPostOfUser = async (id: number) => {
    let response = await axiosInstance.get<IPostResponce>('/posts/user/'+ id);
    return response.data.posts;
}