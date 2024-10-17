import axios from "axios";
import {BaseResponceType} from "../components/models/BaseResponceType";
import IUser from "../components/models/IUser";
import {IPost} from "../components/models/IPost";
import {IComment} from "../components/models/IComment";

const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com',
});

export const getUsers = async ():Promise<IUser[]> => {
    let {data:{users}} =await axiosInstance.get<BaseResponceType & {users:IUser[]}>('/users');
    return users;
}

export const getUser = async (id:string):Promise<IUser> => {
    let {data} = await axiosInstance.get<IUser>(`/users/`+id);
    return data;
}

export const getPosts = async ():Promise<IPost[]> => {
    let {data:{posts}} =await axiosInstance.get<BaseResponceType & {posts:IPost[]}>('/posts');
    return posts;
}

export const getPost = async (id:string):Promise<IPost> => {
    let {data} = await axiosInstance.get<IPost>(`/posts/`+id);
    return data;
}

export const getComments = async ():Promise<IComment[]> => {
    let {data:{comments}} =await axiosInstance.get<BaseResponceType & {comments:IComment[]}>('/comments');
    return comments;
}

export const getComment = async (id:string):Promise<IComment> => {
    let {data} = await axiosInstance.get<IComment>(`/comments/`+id);
    return data;
}