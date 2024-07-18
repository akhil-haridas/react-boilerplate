// src/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for non-serializable values (e.g., Date objects)
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
