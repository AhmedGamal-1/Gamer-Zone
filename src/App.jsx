import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from '../src/pages/Favorites/Favorites';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import Paypal from './components/Payment/Paypal';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { FavoritesProvider } from './context/FavoritesContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { CartProvider } from './context/CartContext';
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            dispatch(setLogin());
        }
    }, []);
    return (
        <>
            <CartProvider>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route
                            path="/checkout"
                            element={
                                <ProtectedRoute>
                                    <Paypal />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                </FavoritesProvider>
            </CartProvider>
        </>
    );
}

export default App;
