import axios, { AxiosResponse } from 'axios';
import { Notification, ApiResponse } from "./api"

const API_URL = 'http://localhost:1337/api';

export const getNotifications = async (): Promise<Notification[]> => {
    try {
        const response: AxiosResponse<ApiResponse> = await axios.get(`${API_URL}/notifications`);

        return response.data.data;

    } catch (error) {
        console.log(error);
    }
};