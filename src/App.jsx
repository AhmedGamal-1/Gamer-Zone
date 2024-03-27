import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';
import Paypal from './components/Payment/Paypal';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './pages/Cart/Cart';

function App() {
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
                    </Routes>
                </FavoritesProvider>
            </CartProvider>
        </>
    );
}

export default App;
