import axios from "axios";

export const api = axios.create({
    baseURL: "https://todo-native-api.vercel.app/api"
})