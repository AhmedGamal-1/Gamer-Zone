import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const loginSlice = createSlice({
    name: 'login',
    initialState: null,
    reducers: {
        setLogin: (state, action) => {
            const encodedToken = localStorage.getItem('userToken');
            const decodedToken = jwtDecode(encodedToken);
            state = decodedToken;
            return state;
        },
    },
});

export const { setLogin } = loginSlice.actions;

export default loginSlice.reducer;
