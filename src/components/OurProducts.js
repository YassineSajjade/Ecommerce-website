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
        {/* brand name filter */}
            <div className="brand-names row" style={{margin: "auto",marginBottom: "30px"}}>
                <div className="brand-logo col" style={{background:"#e1ffd9"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143"/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#ffdedc"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-5_medium.png?v=1580284176"/>
                        <span>Fruits</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#dff1ff"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-4_medium.png?v=1580284192"/>
                        <span>Flour</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#fbf9c9"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-3_medium.png?v=1580284218"/>
                        <span>Meat</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#ffd8ed"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-2_medium.png?v=1580284239"/>
                        <span>Vegies</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#e1e9fc"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-1_medium.png?v=1580284251"/>
                        <span>Eggs</span>
                    </Link>
                </div>

            </div>
        
        {/* list of products */}
            <div className="container-products" style={{marginTop:"30px"}}>
                <ul className="list-products">
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product">
                        <div>
                            <div className="item-product-header">
                                <Link>
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659"/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link>test</Link>
                                <span>$100.00</span>
                                <Link className="btn">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                  
                   
                </ul>
            </div>

        </>
    )
}

export default OurProducts
