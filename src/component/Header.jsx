import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { SlBasketLoaded } from "react-icons/sl";


const Header = () => {

    const cartData = useSelector((state) => state.cart.cartData);

    return (

        <div className="body">

            <nav className="navbar  navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">

                <div className="container  container-fluid">
                    <p className="navbar-brand fw-bold" > MY MART</p>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item position-relative">

                                <Link
                                    to="cart"
                                    className="nav-link active d-flex align-items-center gap-1"
                                    aria-current="page"
                                >
                                    Cart <BsCart3 size={20} />
                                </Link>

                                {cartData?.length > 0 && (
                                    <span
                                        className="position-absolute badge rounded-pill bg-danger"  style={{  top: "0px",   right: "-10px"
                                        }}
                                    >
                                        {cartData.length}
                                    </span>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;