import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function NewNav() {
    const [search, setSearch] = useState();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mt-4 mx-4 main">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto" href="#">
                        <img
                            src="../../../public/images/new.png"
                            style={{ width: '140px', height: '50px' }}
                            alt="Logo"
                        />
                    </a>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title"
                                id="offcanvasNavbarLabel"
                            >
                                <img
                                    src="../../../public/images/new.png"
                                    style={{ width: '140px', height: '50px' }}
                                    alt="Logo"
                                />
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mx-lg-2"
                                        to="/products"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mx-lg-2"
                                        to="/offers"
                                    >
                                        Offers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link mx-lg-2"
                                        to="/contacts"
                                    >
                                        Contacts
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setSearch(event.target.value);
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                    <a className="login-button" href="/signup">
                        SignUp
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>
            <section className="hero-section"></section>
        </div>
    );
}
