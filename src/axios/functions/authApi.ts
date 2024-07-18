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
    const response = await apiClient.post('/auth/login', data);
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export const register = async (data: RegisterData) => {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
};
