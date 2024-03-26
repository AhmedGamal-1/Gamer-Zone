import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';
import Paypal from './components/Payment/Paypal';
import { FavoritesProvider } from './context/FavoritesContext';
// import { useState } from 'react';
// import Checkout from './components/Payment/Paypal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/signup" element={<signup} /> */}
                    {/* <Route path="/signin" element={}/> */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/checkout" element={<Paypal />} />
                </Routes>
            </FavoritesProvider>
        </>
    );
}

export default App;
