// Store.jsx
import { configureStore } from '@reduxjs/toolkit';
import gamesReducers from './getAllData'; // Import gamesReducers
import LoginSlice from './LoginSlice/LoginSlice';

const store = configureStore({
    reducer: {
        allGames: gamesReducers,
        isLogged: LoginSlice,
    },
});

export default store;
