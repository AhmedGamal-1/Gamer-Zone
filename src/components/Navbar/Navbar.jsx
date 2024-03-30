import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/images/logo1.png';
import navbarStyle from '../Navbar/Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/store/LoginSlice/LoginSlice';
import { func } from 'joi';
const Navbar = () => {
    const location = useLocation();
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();
    // const handleLogOut=function(){
    //   dis
    // }
    const handleContactClick = () => {
        if (location.pathname === '/') {
            scroll.scrollToBottom();
        } else {
            // Navigate to home page
            window.location.href = '/';
            scroll.scrollToBottom();
        }
    };

    return (
        <div>
            <nav
                className="navbar navbar-expand-lg"
                data-bs-theme="dark"
                style={{ backgroundColor: '#06131D' }}
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" style={{ width: '100px' }} />
                    </Link>
                    <button
                        className="navbar-toggler z-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul
                            className={`${navbarStyle.smallMedia} navbar-nav me-auto mb-2 mb-lg-0`}
                            style={{ marginLeft: '35%' }}
                        >
                            <li className="nav-item">
                                <Link
                                    className={`${navbarStyle.navText} nav-link text-light`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`${navbarStyle.navText} nav-link text-light`}
                                    to="/products"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`${navbarStyle.navText} nav-link text-light`}
                                    onClick={handleContactClick}
                                    style={{
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Contacts
                                </button>
                            </li>
                        </ul>

                        <div className="cart-shop ms-4">
                            <i
                                className="fa-solid fa-cart-shopping"
                                style={{ color: 'white', marginRight: '30px' }}
                            ></i>
                        </div>

                        {isLogged ? (
                            <div
                                className={`${navbarStyle.signButton} ms-3`}
                                onClick={() => dispatch(logOut())}
                            >
                                <button className="btn btn-danger me-2">
                                    SignOut
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/login">
                                    <div
                                        className={`${navbarStyle.signButton}`}
                                    >
                                        <button className="btn btn-danger me-2">
                                            Login
                                        </button>
                                    </div>
                                </Link>
                                <Link to="/register">
                                    <div
                                        className={`${navbarStyle.signButton} ms-3`}
                                    >
                                        <button className="btn btn-danger me-2">
                                            Register
                                        </button>
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
