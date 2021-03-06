import React, { useState, useEffect, useContext } from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { DataContext } from '../App';

function Navbar() {

    //get context data
    const value = useContext(DataContext);

    //states to handle mobile menu
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState("none");

    //states to handle dropDown menu of 'Shop'
    const [shop, setShop] = useState(false);
    const [shopDrop, setShopDropDown] = useState("none");

    //state of Scroll
    const [scroll, setScroll] = useState(false);

    //Variable for fix the navbar at top
    const active = scroll ? "fixed-top " : "";
    const shadow = scroll ? " 0px 0px 5px 0px #adb5bd " : "";

    // function to handle mobile meni
    const showMenu = () => {
        if (!show) {
            setDisplay("block");
            setShow(true)
        } else {
            setDisplay("none");
            setShow(false);
        }
    }

    //function to handle drop down menu of 'Shop'
    const shopDropDown = () => {
        if (!shop) {
            setShopDropDown("block");
            setShop(true);
        } else {
            setShopDropDown("none");
            setShop(false);
        }
    }

    //Function to handle scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 70) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    //function handle items for littleBasketCart
    const handleLittleBasketCart = () => {
        return (
            value.prdToCart.map((item, index) => {
                return (
                    <li className="item" key={index}>
                        <Link className="product-image" to="#">
                            <img src={item.photo} alt="" style={{ maxWidth: "100%", border: "0 none" }} />
                        </Link>
                        <div className="product-details">
                            <Link to="" title="Remove this item" className="btn-remove" onClick={() => removeItemLittleBasketCart(index,item)}>
                                <span className="fas fa-times"></span>
                            </Link>
                            <p className="product-name">
                                <Link to="">{item.name}</Link>
                            </p>
                            <div className="cart-collateral">
                                1 x
                                <span className="price">
                                    <span className="mooney"> ${item.prix}</span>
                                </span>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }

    //Function handle littleBasketCart
    const littleBasketCart = value.prdToCart.length > 0 ?
        <div className="has-items">

            <ul className="mini-products-list">
               {handleLittleBasketCart()}
            </ul>

            <div className="summary">
                <p className="total">
                    <span className="label">Cart total :</span>
                    <span className="price">
                        <span className="mooney">${value.totalPrice}</span>
                    </span>
                </p>
            </div>

            <div className="actions">

                <button className="btn">
                    <i className="fas fa-check"></i>
                    Check Out
                </button>

                <Link to="/basket" className="btn text-cart" style={{ marginLeft: "5px" }}>
                    <i className="fas fa-shopping-basket"></i>
                    View Cart
                </Link>

            </div>

        </div> :
        <div className="no-items">
            <p>Your cart is currently empty!</p>
        </div>;

    //Function remove item from littleBasketCart
    const removeItemLittleBasketCart = (index,item) =>{
        const array = [...value.prdToCart];
        array.splice(index,1);
        value.togglePrdFromCart(array);
        value.toggleMinusCartCount();
        value.toggleMinusTotalPrice(item.prix);
    }

    //React Effect
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });


    return (
        <>
            <div className="phone-menu animate__animated animate__slideInLeft" style={{ display: display, overflow: "scroll" }}>
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
                            <i className="fas fa-sort-down" onClick={shopDropDown}></i>
                            {/* nav-dropdown-hover */}
                            <div className="nav-dropdown-mobile" style={{ display: shopDrop }}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col">
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
                                        <div className="col">
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
                                        <div className="col">
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
                                        <div className="col">
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
                                        <div className="col">
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
                                        <div className="col">
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
                                        <div className="col">
                                            <div className="row" style={{ marginBottom: "10px" }}><Link to="#"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-1_2000x.jpg?v=1585300878" alt="" style={{ width: "200px", height: "200px" }} /></Link></div>
                                            <div className="row"><Link to="#"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-2_2000x.jpg?v=1585300913" alt="" style={{ width: "200px", height: "200px" }} /></Link></div>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-3_2000x.jpg?v=1585300930" alt="" style={{ width: "200px", marginTop: "10px" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nav-dropdown-hover */}
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
                <div className={`container-fluid ${active}`} style={{ boxShadow: shadow }}>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="nav-brand" to="/">Groc Store</Link>

                        <div className="navbar-collapse" style={{ display: "none" }}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="navbar-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-link" to="#">Shop</Link>
                                    <i className="fas fa-sort-down"></i>
                                    {/* nav-dropdown-hover */}
                                    <div className="site-nav-dropdown animate__animated animate__slideInDown">
                                        <div className="container">

                                            <div className="row">
                                                {/* start col left */}
                                                <div className="col-7">
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
                                                <div className="col-5">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="row" style={{ marginBottom: "10px" }}><Link to="#"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-1_2000x.jpg?v=1585300878" alt="" style={{ width: "200px", height: "200px" }} /></Link></div>
                                                            <div className="row"><Link to="#"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-2_2000x.jpg?v=1585300913" alt="" style={{ width: "200px", height: "200px" }} /></Link></div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row">
                                                                <Link to="#"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-3_2000x.jpg?v=1585300930" alt="" style={{ height: "410px" }} /></Link>
                                                            </div>
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
                                <li id="liSlide">
                                    <Link to="/basket">
                                        <i className="fas fa-shopping-basket" style={{ color: "#28a745" }}></i>
                                        <div className="detail">
                                            {/* <div id="cartCount">{value.cartCount}</div> */}
                                            <div id="cartCount">{value.cartCount}</div>
                                        </div>
                                    </Link>
                                    <div id="slidedown-cart" style={{ overflow: "hidden", display: "none" }}>
                                        {/* Show littleBasketCart is emty OR had items */}
                                        {littleBasketCart}
                                    </div>
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
