import axios from "axios";


const BaseUrl = `${process.env.BASE_URL}/api`;

export const AxiosInstance = axios.create({
    baseURL: BaseUrl,
});
