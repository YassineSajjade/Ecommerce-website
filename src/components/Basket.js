import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./Basket.css";
import Navbar from "./Navbar";
import "./SupportBlock";
import "./Footer";
import SupportBlock from './SupportBlock';
import Footer from './Footer';
import { DataContext } from '../App';


function Basket() {

        //get context data
    const contextValue = useContext(DataContext);

        //function to remove item from basket list
    const removeItem = (index,itemPrix) => {
        const array = [...contextValue.prdToCart];
        array.splice(index,1);
        contextValue.togglePrdFromCart(array);
        contextValue.toggleMinusCartCount();
        contextValue.toggleMinusTotalPrice(itemPrix);
    }

        //function to handle products for basket
    const handleDataShop = () => {
        return (
            contextValue.prdToCart.map((item, index) => {
                return (
                    <div className="cart-row" key={index}>
                        <div className="grid-full cart-row-table-large text-center">
                            <div className="grid grid__item cart-items wide--two-tenths">
                                <Link className="cart-image" to="#">
                                    <img src={item.photo} alt="" />
                                </Link>
                            </div>

                            <div className="grid grid__item product-infos text-left wide--eight-tenths">

                                {/* 1 */}
                                <div className="grid__item cart-title" >
                                    <Link className="product-name" to="#">{item.name}</Link>
                                    <br />
                                    {/* <small>3 kg / blue</small> */}
                                </div>

                                {/* 2 */}
                                <div className="grid__item" >
                                    <span className="price h5">
                                        <span className="money">${item.prix}</span>
                                    </span>
                                </div>

                                {/* 3 */}
                                <div className="grid__item" >
                                    <div className="qty-box-set">
                                        <input className="qtyminus1" type="button" value="-" />
                                        <input className="quantity-selector cart-number" type="number" value="1" min="0" />
                                        <input className="qtyplus1" type="button" value="+" />
                                    </div>
                                </div>

                                {/* 4 */}
                                <div className="grid__item" >
                                    <span className="cart-total">Total:</span>
                                    <span className="h5" style={{ marginLeft: "5px" }} >
                                        <span className="money">${item.prix}</span>
                                    </span>
                                </div>

                                {/* 5 */}
                                <div className="grid__item" >
                                    <Link className="cart-remove" to="/basket" onClick={() => removeItem(index,item.prix)}>
                                        <span>
                                            <i className="fas fa-times"></i>
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                )
            })
        )
    }

        //function to show main (basket empty OR not)
    const BasketMain = contextValue.prdToCart.length > 0 ? 
                <form className="cart" action="" method="" noValidate >

                {/* grid 2 thirds */}
                <div className="grid__item two-thirds">

                    {/* cart row header label */}
                    <div className="cart-row cart-heder-label">
                        <div className="grid-full">
                            <div className="grid__item">
                                <div className="grid">
                                    <div className="grid__item">
                                        <span className="h4">Products</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* cart row */}

                    {handleDataShop()}

                    {/* buttons actions */}
                    <div className="btn-actions">
                        <Link className="btn" to="/">Continue shopping</Link>
                        <input className="btn update-cart" type="submit" name="update" value="update cart" style={{ float: 'right' }} />
                    </div>

                </div>

                {/* grid 1 third */}
                <div className="grid__item one-thirds">

                    <div className="grid shipping-section">
                        <div className="order-summary">
                            <h5>Order Summary</h5>
                            <div className="grid__item">

                                <p className="cart-total-price" style={{ margin: '0 0 15px 0' }}>
                                    <span className="cart__subtotal-title h6">Subtotal :</span>
                                    <span className="cart__subtotal h6">
                                        <span className="money" data-currency-usd={`$${contextValue.totalPrice}`}>${contextValue.totalPrice}</span>
                                    </span>
                                </p>

                                <div className="grid__item">
                                    <button className="text-link cart__note-add" type="button">Add a note to your order</button>
                                    <div className="cart__note" style={{ display: 'none' }}>
                                        <label htmlFor="CartSpecialInstructions">Special instructions for seller</label>
                                        <textarea name="note" className="input-full" id="CartSpecialInstructions"></textarea>
                                    </div>
                                </div>

                                <p className="shopping-checkout">
                                    <em>Shipping, taxes, and discounts will be calculated at checkout.</em>
                                </p>

                                <div className="cart_btn">
                                    <input type="submit" name="checkout" className="btn" value="Proceed to Checkout" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </form>
                :<div className="cart-empty">
                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/t/8/assets/empty-cart.png?v=2503369804438330024" alt="" style={{maxWidth: "100%"}} />
                    <h5>Your cart is currently empty!</h5>
                    <p>Add items you want to shop</p>
                    <p>
                        <Link className="btn" to="/">Start Shopping</Link>
                    </p>
                </div>;

    

    return (
        <>
            <Navbar />
            <div className="cart-header">
                <h1>Your shooping cart</h1>
                <Link to="/">Home</Link>
                <span style={{ fontSize: "1.4em" }}>/</span>
                <span>Your shooping cart</span>
            </div>
            <main className="main-content">
                <div className="invisible-large"></div>
                <div className="wrapper">
                    <div className="grid-uniform">
                        <div className="grid-item">
                            <div className="container">

                                {/* for cart empty OR had products */}
                                {  BasketMain  }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="invisible-large"></div>
            </main>
            <SupportBlock />
            <Footer />
        </>
    )
}

export default Basket
