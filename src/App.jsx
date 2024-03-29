import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Products from './pages/Products/Products';
import Paypal from './components/Payment/Paypal';
import { FavoritesProvider } from './context/FavoritesContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from '../src/redux/store/Store';

function App() {
    return (
        <div>
            <Provider store={Store}>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<signup></signup>} />
                        <Route path="/signin" element={<signIn></signIn>} />
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
    );
}

export default App;
