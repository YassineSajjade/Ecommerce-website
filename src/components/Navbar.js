import React, { useState, useEffect } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState("none");
    const [scroll, setScroll] = useState(false);

    const showMenu = () => {
        if (!show) {
            // console.log("display none / " + show);
            setDisplay("block");
            setShow(true)
        } else {
            // console.log("display block / " + show);
            setDisplay("none");
            setShow(false);
        }
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 70) {
            console.log(offset);
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    //const active = scroll ? "navbar fixed-top navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light bg-light" ;
    const active = scroll ? "fixed-top " : "";



    return (
        <>
            <div className="phone-menu animate__animated animate__slideInLeft" style={{ display: display }}>
                <div className="close-icon">
                    <i className="fas fa-window-close" onClick={showMenu}></i>
                </div>
                <div style={{ border: "1px solid #016d3b", marginLeft: "15px", marginRight: "15px" }}></div>
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
            <div className="top__bar" >
                <div className="container">
                    <ul className="top__bar__left">
                        <li>
                            <i className="fas fa-phone"></i>
                            <span className="span">(00) 000 111 222</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <Link className="span" to="mailto:info@exemple.com">info@exemple.com</Link>
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
                <div className={`container-fluid ${active}`}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="nav-brand" to="#">MyStore</Link>

                        <div className="navbar-collapse" style={{ display: "none" }}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Shop</Link>
                                    <i className="fas fa-sort-down"></i>

                                    {/* nav-dropdown-hover */}
                                    <div className="site-nav-dropdown">
                                        <div className="container">

                                            <div className="row">
                                                {/* start col left */}
                                                <div className="col-9">
                                                    {/* start row 1 col left */}
                                                    <div className="row" style={{ marginBottom: "10px" }}>
                                                        <div className="inner col">
                                                            <div className="div-link">
                                                                <Link to="#">Fruits</Link>
                                                            </div>
                                                            <ul className="dropdown">
                                                                <li><Link to="#">Apple</Link></li>
                                                                <li><Link to="#">Orange</Link></li>
                                                                <li><Link to="#">Cherry</Link></li>
                                                                <li><Link to="#">Elderberry</Link></li>
                                                                <li><Link to="#">Capsicom</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner col">
                                                            <div className="div-link">
                                                                <Link to="#">Vegitables</Link>
                                                            </div>
                                                            <ul className="dropdown">
                                                                <li><Link to="#">Beetroot</Link></li>
                                                                <li><Link to="#">Broccoli</Link></li>
                                                                <li><Link to="#">Capsicum</Link></li>
                                                                <li><Link to="#">Cocumber</Link></li>
                                                                <li><Link to="#">Plum</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner col">
                                                            <div className="div-link">
                                                                <Link to="#">Food Grains</Link>
                                                            </div>
                                                            <ul className="dropdown">
                                                                <li><Link to="#">Brown Rice</Link></li>
                                                                <li><Link to="#">Horse Gram</Link></li>
                                                                <li><Link to="#">Wheat</Link></li>
                                                                <li><Link to="#">Rice</Link></li>
                                                                <li><Link to="#">Cherry</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* end row 1 col left */}
                                                    {/* start row 2 col left */}
                                                    <div className="row">
                                                        <div className="inner col">
                                                            <div className="div-link">
                                                                <Link to="#">Farm Foods</Link>
                                                            </div>
                                                            <ul className="dropdown">
                                                                <li><Link to="#">Badam</Link></li>
                                                                <li><Link to="#">Coriander</Link></li>
                                                                <li><Link to="#">Chiken Brest</Link></li>
                                                                <li><Link to="#">Plum</Link></li>
                                                                <li><Link to="#">Jamun fruit</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner col">
                                                            <div className="div-link">
                                                                <Link to="#">meat</Link>
                                                            </div>
                                                            <ul className="dropdown">
                                                                <li><Link to="#">Butter Cookies</Link></li>
                                                                <li><Link to="#">Watermelon</Link></li>
                                                                <li><Link to="#">TM Rice</Link></li>
                                                                <li><Link to="#">Potato</Link></li>
                                                                <li><Link to="#">Badam</Link></li>
                                                            </ul>
                                                        </div>
                                                        <div className="inner col">
                                                            <div className="div-link">
                                                                <Link to="#">Grains</Link>
                                                            </div>
                                                            <ul className="dropdown">
                                                                <li><Link to="#">Capsicum</Link></li>
                                                                <li><Link to="#">Chicken Boneless</Link></li>
                                                                <li><Link to="#">Fish</Link></li>
                                                                <li><Link to="#">Broccoli</Link></li>
                                                                <li><Link to="#">Beetroot</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* end row 2 col left */}
                                                </div>
                                                {/* end col left */}

                                                {/* start col right */}
                                                <div className="col-3">
                                                    <div className="row">
                                                        <div className="col-left">
                                                            <Link to="#"><img href="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-1_2000x.jpg?v=1585300878" /></Link>
                                                            <Link to="#"><img href="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-2_2000x.jpg?v=1585300913" /></Link>
                                                        </div>
                                                        <div className="col-right">
                                                            <Link to="#"><img href="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-3_2000x.jpg?v=1585300930" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end col right */}
                                            </div>


                                        </div>
                                    </div>
                                    {/* nav-dropdown-hover */}
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
                                    <i className="fas fa-user"></i>
                                </li>
                            </ul>
                        </div>

                        <button className="navbar-toggler" type="button" style={{ borderColor: "#016d3b" }} onClick={showMenu} >
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <i className="fas fa-bars" style={{ color: "#016d3b" }}></i>
                        </button>

                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar
