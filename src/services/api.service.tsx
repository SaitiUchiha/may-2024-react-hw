import { IUser } from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import axios from "axios";
import {baseUrl, urls} from "../constants/urls";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
})

export const getUsers = async ():Promise<IUser[]> => {
    let responce =await axiosInstance.get<IUser[]>(urls.users.base);
    return responce.data;
}
export const getUser = async (id:number):Promise<IUser> => {
    let responce =await axiosInstance.get<IUser>(urls.users.byId(id));
    return responce.data;
}


export const getPosts = async ():Promise<IPost[]> => {
    let responce =await axiosInstance.get<IPost[]>(urls.posts.base);
    return responce.data;
}


export const getComments = async ():Promise<IComment[]> => {
    let responce =await axiosInstance.get<IComment[]>(urls.comments.base);
    return responce.data;
}