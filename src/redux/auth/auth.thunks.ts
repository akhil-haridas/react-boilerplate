import { AppDispatch } from '../store';
import { loginSuccess, logout } from './auth.slice';

// Simulated async login
export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // On success, dispatch loginSuccess action
    dispatch(loginSuccess({ username, email: `${username}@example.com` }));
};

// Simulated logout
export const logoutUser = () => async (dispatch: AppDispatch) => {
    // Simulate clearing session or token
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Dispatch logout action
    dispatch(logout());
};
