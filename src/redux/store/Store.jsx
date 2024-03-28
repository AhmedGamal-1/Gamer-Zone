import { configureStore } from '@reduxjs/toolkit';
import { gamesReducers } from './getAllData';

const Store = configureStore({
    reducer: { allGames: gamesReducers },
});
export default Store;
