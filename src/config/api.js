import axios from "axios";

export const Product = axios.create({
    baseURL : "https://dummyjson.com"
});

export const AuthApi = axios.create({
    baseURL : "https://dummyjson.com/auth"
});

