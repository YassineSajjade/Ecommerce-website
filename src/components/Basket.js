import React,{useState} from 'react';
import {Link} from "react-router-dom";
import "./Basket.css";
import Navbar from "./Navbar";
import "./SupportBlock";
import "./Footer";
import SupportBlock from './SupportBlock';
import Footer from './Footer';


function Basket(props) {

    const [cartCount, setCartCount] = useState(props.cartCounApp);

    return (
        <>
          <Navbar cartCountP={cartCount}/>  
          <div className="cart-header">
              <h1>Your shooping cart</h1>
              <Link to="/">Home</Link>
              <span style={{fontSize: "1.4em"}}>/</span>
              <span>Your shooping cart</span>
          </div>
          <main className="main-content">
            <div className="invisible-large"></div>
            <div className="wrapper">
                <div className="grid-uniform">
                    <div className="grid-item">
                        <div className="container">
                            <div className="cart-empty">
                                <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/t/8/assets/empty-cart.png?v=2503369804438330024" alt="" style={{maxWidth: "100%"}} />
                                <h5>Your cart is currently empty!</h5>
                                <p>Add items you want to shop</p>
                                <p>
                                    <Link className="btn" to="/">Start Shopping</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invisible-large"></div>
          </main>
          <SupportBlock/>
          <Footer/>
        </>
    )
}

export default Basket
