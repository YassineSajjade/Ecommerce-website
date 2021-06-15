import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import { DataContext } from '../App';

function ModalSuccess({fadeP, displayP, showSuccessModalP, nameP, priceP, photoP}) {

    const valueContext = useContext(DataContext);

    return (
        <div className={`success-modal modale animate__animated ${fadeP} `}  style={{visibility: displayP}}>
                <div className="overlay"></div>
                <div className="content">

                    <div className="modal-left">
                        <p className="added-to-cart info">Product successfully added to your shopping cart</p>
                        <img className="product-image" src={`${photoP}`} alt="modal window" />
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
                            <span className="cartCount"> {valueContext.cartCount} </span>
                            item(s) in your cart
                        </p>
                        <span className="cartTotal">
                            <span className="mooney">${valueContext.totalPrice}</span>
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

                    <a href="#" className="close-modal">
                        <i className="far fa-times-circle" onClick={showSuccessModalP}></i>
                    </a>

                </div>
            </div>
    )
}

export default ModalSuccess;
