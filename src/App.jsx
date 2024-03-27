import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, logOut } from './Redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
function App() {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    // const userData = useSelector((state) => state.isLogged);
    // const handleCick = function () {
    //     dispatch(logOut());
    //     navigate('/login');
    // };
    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            dispatch(setLogin());
        }
    }, []);
    return (
        <>
            {/* {userData ? (
                <div>Hey {userData.name}</div>
            ) : (
                <div>You are not logged</div>
            )}
            <button>
                {userData ? (
                    <div onClick={handleCick}>SinOut</div>
                ) : (
                    <div>SignIn</div>
                )}
            </button> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
