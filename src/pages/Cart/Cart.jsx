import { IconButton } from '@mui/material';
import { useCart } from '../../context/CartContext';
import './Cart.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Link } from 'react-router-dom';
export default function Cart() {
    const { cart, addToCart, decreaseCart, removeFromCart } = useCart();
    const totalPrice = cart.reduce((acc, el) => acc + el.price * el.counter, 0);

    const handleIncrease = (el) => {
        addToCart(el);
    };
    const handleDecrease = (el) => {
        decreaseCart(el);
    };
    const handleDelete = (id) => {
        removeFromCart(id);
    };
    return (
        <div className="cartPage">
            <div className="container-fluid">
                <div className="row gy-5">
                    <div className="col-lg-9  order-md-0  order-1">
                        <div className="items">
                            {cart.length === 0 ? (
                                <div className="empty">
                                    <div> Your cart is empty :(</div>
                                    <Link to={'/products'}>
                                        <button>Go to Shopping</button>
                                    </Link>
                                </div>
                            ) : (
                                cart.map((el) => (
                                    <div className="row mb-5" key={el.id}>
                                        <div className="col-sm-8 col-xs-12   ">
                                            <div className="item-content ">
                                                <div className="img">
                                                    <img
                                                        src={`/images/${el.poster}`}
                                                    ></img>
                                                </div>
                                                <div className="content-cart">
                                                    <div className="name">
                                                        {el.name}
                                                    </div>
                                                    <div className="catg">
                                                        {el.category}
                                                    </div>
                                                    <div className="price">
                                                        {el.price} EGP
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-2 ">
                                            <div className="counter">
                                                <IconButton
                                                    onClick={() => {
                                                        handleIncrease(el);
                                                    }}
                                                >
                                                    <AddBoxIcon
                                                        style={{
                                                            color: 'white',
                                                        }}
                                                    ></AddBoxIcon>
                                                </IconButton>
                                                <span>{el.counter}</span>

                                                <IconButton
                                                    onClick={() => {
                                                        handleDecrease(el);
                                                    }}
                                                >
                                                    <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-2">
                                            <div className="delete-btn">
                                                <span
                                                    className="trash"
                                                    onClick={() => {
                                                        handleDelete(el.id);
                                                    }}
                                                >
                                                    <span></span>
                                                    <i></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="proceedToCheck">
                            <div className="mb-2">
                                {' '}
                                Subtotal ({cart.length} item):
                            </div>{' '}
                            <div className="mb-3">{totalPrice} EGP</div>
                            <Link to={'/checkout'} className="proceed-btn">
                                Proceed to checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
