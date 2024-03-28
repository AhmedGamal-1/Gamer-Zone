// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchUserData = createAsyncThunk(
//     'register/fetchUserData',
//     async () => {
//         const response = await axios.post('', initialState);
//         return response.data;
//     }
// );

// const clearObj = {
//     first_name: '',
//     last_name: '',
//     age: 0,
//     email: '',
//     password: '',
// };
// const registerSlice = createSlice({
//     name: 'register',
//     initialState: clearObj,
//     reducers: {
//         getUserData: (state, action) => {
//             return { ...state, ...action.payload };
//         },
//         clearUserData:(state,action)=>{
//             return state=clearObj
//         }
//         extraReducers: (builder) => {
//             builder.addCase(fetchUserData.fulfilled, (state, action) => {

//             });
//         },
//     },
// });

// export const { getUserData } = registerSlice.actions;

// export default registerSlice.reducer;
