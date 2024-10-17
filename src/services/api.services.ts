import axios from "axios";

const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com',
});

export const getUsers = async () => {
let axiosResponce =await axiosInstance.get('/users');


}