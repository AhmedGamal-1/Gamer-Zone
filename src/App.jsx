import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from '../src/pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Products from './pages/Products/Products';
import Paypal from './components/Payment/Paypal';
import { FavoritesProvider } from './context/FavoritesContext';

import { Provider } from 'react-redux';

import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Payed from './components/Payed/Payed';
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(5555);
        if (localStorage.getItem('userToken') !== null) {
            dispatch(setLogin());
        } else {
            console.log(5);
        }
    }, []);
    return (
        <div>
            <CartProvider>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/checkout/:id" element={<Paypal />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/payed" element={<Payed />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                </FavoritesProvider>
            </CartProvider>
        </div>
    );
}

export default App;
