import React from 'react';
import { Link } from 'react-router-dom';
import "./OurProducts.css";

function OurProducts() {
    return (
        <>
            <div className="container border-header">
                <h2>Our Products</h2>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                <span></span>
            </div>

            <div className="brand-names row" style={{margin: "auto"}}>
                <div className="brand-logo col">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default OurProducts
