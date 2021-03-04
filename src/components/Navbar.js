import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="phone-menu" style={{display: "none"}}>
                <div className="close-icon">
                    <i className="fas fa-window-close"></i>
                </div>
                <div style={{    border: "1px solid #016d3b",marginLeft: "15px",marginRight: "15px"}}></div>
                <div className="menu-items" >
                            <ul className="">
                                <li className="">
                                    <Link className="navbar-link" to="#">Home</Link>
                                </li>
                                <li className="">
                                    <Link className="navbar-link" to="#">Shop</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                                <li className="">
                                    <Link className="navbar-link" to="#">Best Sellers</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                                <li className="">
                                    <Link className="navbar-link" to="#">Deal Of The Day</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                                <li className="">
                                    <Link className="navbar-link" to="#">Pages</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                            </ul>
                        </div>
            </div>
            <div className=" top__bar">
                <div className="container">
                    <ul className="top__bar__left">
                        <li>
                            <i className="fas fa-phone"></i>
                            <span>(00) 000 111 222</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <Link to="mailto:info@exemple.com">info@exemple.com</Link>
                        </li>
                    </ul>
                    <ul className="top__bar__right">
                        <li className="header__social__links">
                            <ul className="inline__list social__icons">
                                <li>
                                    <Link className="" to="#"><span className="fab fa-twitter"></span></Link>
                                </li>
                                <li>
                                    <Link className="" to="#"><span className="fab fa-facebook"></span></Link>
                                </li>
                                <li>
                                    <Link className="" to="#"><span className="fab fa-google-plus-g"></span></Link>
                                </li>
                                <li>
                                    <Link className="" to="#"><span className="fab fa-instagram"></span></Link>
                                </li>
                                <li>
                                    <Link className="" to="#"><span className="fab fa-linkedin-in"></span></Link>
                                </li>
                            </ul>
                        </li>
                        <li className="header__currency">
                            {/* <ul className="tbl-list"> */}
                            <ul>
                                {/* <li className="currency dropdown-parent uppercase currency-block"> */}
                                <li className="currency">
                                    <div className="selector-arrow show">
                                        <select className="currencies_src" id="currencies">
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="MAD">MAD</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="nav-brand" to="#">MyStore</Link>

                        <div className="navbar-collapse" style={{display: "none"}}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Shop</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Best Sellers</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Deal Of The Day</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Pages</Link>
                                    <i className="fas fa-sort-down"></i>
                                </li>
                            </ul>
                        </div>

                        <div className="right__header">
                            <ul>
                                <li>
                                    <i className="fas fa-shopping-basket"></i>
                                </li>
                                <li>
                                    <i class="fas fa-user"></i>
                                </li>
                            </ul>
                        </div>

                        <button className="navbar-toggler" type="button" style={{borderColor: "#016d3b"}}>
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <i class="fas fa-bars" style={{color: "#016d3b"}}></i>
                        </button>

                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar
