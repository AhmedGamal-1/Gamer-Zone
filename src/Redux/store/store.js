import { configureStore } from '@reduxjs/toolkit';
// import registerSlice from '../store/registerSlice/registerSlice';

const store = configureStore({
    reducer: {
        // register: registerSlice,
    },
});

export default store;
