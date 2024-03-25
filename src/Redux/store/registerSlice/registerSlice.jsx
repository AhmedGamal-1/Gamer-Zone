import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        first_name: 'eman',
        last_name: '',
        age: 0,
        email: '',
        password: '',
    },
    reducers: {
        : (state, action) => {
                    return {
                        ...state,
                        first_name: action.payload.first_name,
                        last_name: action.payload.last_name,
                        age: action.payload.age,
                        email: action.payload.email,
                        password: action.payload.password,
                    };
                },
        // setFirstName: (state, action) => {
        //     return { ...state, first_name: action.payload };
        // },
        // setLastName: (state, action) => {
        //     return { ...state, Last_name: action.payload };
        // },
        // setAge: (state, action) => {
        //     return { ...state, age: action.payload };
        // },
        // setEmail: (state, action) => {
        //     return { ...state, email: action.payload };
        // },
        // setPassowrd: (state, action) => {
        //     return { ...state, password: action.payload };
        // },
    },
});

// export const { setFirstName, setLastName, setAge, setEmail, setPassowrd } = registerSlice.actions;
export const { getUserData } = registerSlice.actions;

export default registerSlice.reducer;
