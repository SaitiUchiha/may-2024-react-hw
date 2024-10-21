import axios from "axios";
import {IQuote} from "../models/IQuote";
import {BaseResponceType} from "../models/BaseResponceType";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
})

export const apiService = {
    quotes: {
        getAll: async (page:number): Promise<BaseResponceType & {quotes:IQuote[]}> => {
            const skip = (page-1)*30;

            const {data} = await axiosInstance.get<BaseResponceType & {quotes:IQuote[]}>('/quotes', {
                params:{
                    skip: skip
                }
            })
            return data;
        }
    }
}