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

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from '../src/redux/store/Store';


import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/store/LoginSlice/LoginSlice';
import { useEffect } from 'react';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            dispatch(setLogin());
        }
    }, []);
    return (

        <div>
            <Provider store={Store}>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<signup></signup>} />
                        <Route path="/signin" element={<signIn></signIn>} />

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

                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/checkout/:id" element={<Paypal />} />
                    </Routes>
                </FavoritesProvider>
            </Provider>
        </div>

                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
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
