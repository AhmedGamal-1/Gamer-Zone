import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    );
}

export default App;
