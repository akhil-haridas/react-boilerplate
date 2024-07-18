import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice';

const rootReducer = combineReducers({
    auth: authReducer,
    // Add other reducers here as your app grows
});

export default rootReducer;
