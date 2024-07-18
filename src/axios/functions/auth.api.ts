import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../../constants/auth/constants";
import apiClient from "../axiosClient";

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    password: string;
    email: string;
}

export const login = async (data: LoginData) => {
    const response = await apiClient.post(LOGIN_ENDPOINT, data);
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export const register = async (data: RegisterData) => {
    const response = await apiClient.post(REGISTER_ENDPOINT, data);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
};
