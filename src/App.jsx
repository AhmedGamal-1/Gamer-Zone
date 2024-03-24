import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';
import { FavoritesProvider } from './context/FavoritesContext';
// import { PayPalButton } from 'react-paypal-button-v2';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Checkout from './components/Payment/Checkout';

const initialOptions = {
    'client-id':
        'AXZreM1Xm9aIi3wL43tzzmwSoAIL2vB7OVx6Yz__unl9949iCe6SwDw7PWV-Ql2YCadYyFNEfjeuAG3g',
    currency: 'USD',
    intent: 'capture',
};

function App() {
    return (
        <>
            <PayPalScriptProvider options={initialOptions}>
                <Checkout />
            </PayPalScriptProvider>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </FavoritesProvider>
        </>
    );
}

export default App;
