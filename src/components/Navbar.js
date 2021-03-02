import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className=" top__bar">
            <div className="">
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
                        <ul className="tbl-list">
                            <li className="currency dropdown-parent uppercase currency-block">
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
    )
}

export default Navbar
