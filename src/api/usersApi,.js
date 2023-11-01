import axios from "axios";

export const usersApiAxios = axios.create({
    baseURL: "http://localhost:3000/users"
})