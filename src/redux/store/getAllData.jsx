import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const gamesAction = createAsyncThunk('games/getAllGames', async () => {
    const res = await axios.get('http://localhost:2024/products');
    return res.data;
});
const gamesSlice = createSlice({
    name: 'games',
    initialState: { games: [], loading: false, status: true },
    extraReducers: (builder) => {
        builder.addCase(gamesAction.fulfilled, (state, action) => {
            state.games = action.payload;
        });
        builder.addCase(gamesAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(gamesAction.rejected, (state) => {
            state.status = false;
        });
    },
});
export default gamesSlice.reducer;
