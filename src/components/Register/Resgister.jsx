import { useSelector, useDispatch } from 'react-redux';
// import {
//     setFirstName,
//     setLastName,
//     setAge,
//     setEmail,
//     setPassowrd,
// } from '../../Redux/store/registerSlice/registerSlice';
import { getUserData } from '../../Redux/store/registerSlice/registerSlice';

export default function Resgister() {
    const register = useSelector((state) => state.register);
    const dispatch = useDispatch();
    const getData = (e) => {
        dispatch(getUserData(e.target.value));
        console.log(register);
    };
    return (
        <>
            <h1>Welcome</h1>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    className="my-input form-control"
                    name="first_name"
                    id="first-name"
                    onChange={(e) => {
                        dispatch(getData(e.target.value));
                        console.log(register);
                    }}
                />
                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    className="my-input form-control"
                    name="Last_name"
                    id="last-name"
                    // onChange={(e) => {
                    //     dispatch(setLastName(e.target.value));
                    //     console.log(register);
                    // }}
                />
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    className="my-input form-control"
                    name="age"
                    id="age"
                    // onChange={(e) => {
                    //     dispatch(setAge(e.target.value));
                    //     console.log(register);
                    // }}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="my-input form-control"
                    name="email"
                    id="email"
                    // onChange={(e) => {
                    //     dispatch(setEmail(e.target.value));
                    //     console.log(register);
                    // }}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="my-input form-control"
                    name="password"
                    id="password"
                    // onChange={(e) => {
                    //     dispatch(setPassowrd(e.target.value));
                    //     console.log(register);
                    // }}
                />
                <input type="button" value="Create Account" />
                <div>
                    Already have a account?<span> Log in</span>
                </div>
                +++++
            </form>
        </>
    );
}
