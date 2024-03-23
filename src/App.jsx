import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Favorites from './pages/Favorites/Favorites';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products/Products';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    );
}

export default App;
