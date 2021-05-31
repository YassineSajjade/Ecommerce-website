import React from 'react';
import {Link} from 'react-router-dom';

function ModalSuccess({fadeP, displayP, showSuccessModalP, nameP, priceP}) {
    return (
        <div className={`success-modal modale animate__animated ${fadeP} `}  style={{visibility: displayP}}>
                <div className="overlay"></div>
                <div className="content">

                    <div className="modal-left">
                        <p className="added-to-cart info">Product successfully added to your shopping cart</p>
                        <img className="product-image" src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659" alt="modal window" />
                        <div className="cart-desc">
                            <h3 className="product-title">{nameP}</h3>
                            <span className="price">${priceP}</span>
                            <p>
                                Qty:
                                <span className="qty"> 1</span>
                            </p>
                        </div>
                    </div>

                    <div className="modal-right">
                        <p>
                            There are
                            <span className="cartCount"> 1 </span>
                            item(s) in your cart
                        </p>
                        <span className="cartTotal">
                            <span className="mooney">$100.00</span>
                        </span>
                        <button className="btn continue-shopping">
                            <Link to="/" onClick={showSuccessModalP}>Continue Shopping</Link>
                        </button>
                        <div className="success-message added-to-cart">
                            <Link to="/basket" className="btn">
                                <i className="fas fa-shopping-cart"></i>
                                View Cart
                            </Link>
                        </div>
                    </div>

                    <a className="close-modal">
                        <i className="far fa-times-circle" onClick={showSuccessModalP}></i>
                    </a>

                </div>
            </div>
    )
}

export default ModalSuccess;
