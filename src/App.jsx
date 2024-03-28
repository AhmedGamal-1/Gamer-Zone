import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from '../src/pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';

import Login from './pages/Login/Login';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { setLogin } from './Redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';

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
            {/* <NavBar />
            {userData ? (
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

            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </FavoritesProvider>
        </>
    );
}

export default App;
