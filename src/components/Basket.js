import React from 'react';
import {Link} from "react-router-dom";
import "./Basket.css";
import Navbar from "./Navbar";

function Basket() {
    return (
        <>
          <Navbar/>  
          <div className="cart-header">
              <h1>Your shooping cart</h1>
              <Link to="/">Home</Link>
              <span style={{fontSize: "1.4em"}}>/</span>
              <span>Your shooping cart</span>
          </div>
        </>
    )
}

export default Basket
