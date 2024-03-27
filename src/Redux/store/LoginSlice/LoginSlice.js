import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: { isLogged: false },
    reducers: {},
});

export const { getUserData } = loginSlice.actions;

export default loginSlice.reducer;
