import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from '../src/pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';
import Paypal from './components/Payment/Paypal';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';

import Login from './pages/Login/Login';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { setLogin } from './Redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';

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
                        {/* <Route path="/signup" element={<signup} /> */}
                        {/* <Route path="/signin" element={}/> */}
                        <Route path="/products" element={<Products />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/checkout" element={<Paypal />} />
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
