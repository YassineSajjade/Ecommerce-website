import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "./OurProducts.css";

function OurProducts(props) {

    const [myData, setData] = useState([]);

    // const [display,setDisplay] = useState("none");
    const [display,setDisplay] = useState("hidden");
    const [show,setShow] = useState(false);
    const [fade,setFade] = useState("animate__fadeOut");

    // display and hide success modal
    const showSuccessModal = () => {
        if (!show) {
            //console.log("display none / " + show);
            setDisplay("visible");
            // setDisplay("block");
            setShow(true);
            setFade("animate__fadeIn");
        } else {
            //console.log("display block / " + show);
            setFade("animate__fadeOut");
            setDisplay("hidden");
            // setDisplay("none");
            setShow(false);
        }
    }
    
    useEffect(() => {
        //setData(props.myData);
        if(props != null){
            setData(props.myData);
        }else{
            console.log("props empty");
        }
    },[props]);

    const handleData = () =>{
        return(
            myData != null 
            ? myData.map( (item, index) => {
                return (
                    <li className="item-product" key={index}>
                        <div>
                            <div className="item-product-header">
                                <Link to="#">
                                    <img src={item.photo} alt=""/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link to="#">{item.name}</Link>
                                <span>${item.prix}</span>
                                <Link className="btn" to="#">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                )
                
            }) 
            :<li className="item-product" >
                <div>
                    <div className="item-product-header">
                        <Link to="#">
                            <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" alt=""/>
                        </Link>
                    </div>
                    <div className="item-product-body">
                        <Link to="#">Not Available</Link>
                            <span>Not Available</span>
                        <Link className="btn" to="#" >Add To Cart</Link>
                    </div>
                </div>
            </li>
        )
        
    }
   
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
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-6_medium.png?v=1580284143" alt=""/>
                        <span>Milk</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#ffdedc"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-5_medium.png?v=1580284176" alt=""/>
                        <span>Fruits</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#dff1ff"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-4_medium.png?v=1580284192" alt=""/>
                        <span>Flour</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#fbf9c9"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-3_medium.png?v=1580284218" alt=""/>
                        <span>Meat</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#ffd8ed"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-2_medium.png?v=1580284239" alt=""/>
                        <span>Vegies</span>
                    </Link>
                </div>
                <div className="brand-logo col" style={{background:"#e1e9fc"}}>
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/icon-1_medium.png?v=1580284251" alt=""/>
                        <span>Eggs</span>
                    </Link>
                </div>

            </div>
            {/* end brand name filter */}

            {/* list of products */}
            <div className="container-products" style={{marginTop:"30px"}}>
                <ul className="list-products">
                    <li className="item-product" >
                        <div>
                            <div className="item-product-header">
                                <Link to="#">
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659" alt=""/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link to="#">Watermelon</Link>
                                    <span>$ 50.00</span>
                                <Link className="btn" to="#" onClick={showSuccessModal}>Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product" >
                        <div>
                            <div className="item-product-header">
                                <Link to="#">
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-2.png?v=1612872733" alt=""/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link to="#">Tomato</Link>
                                    <span>$ 30.00</span>
                                <Link className="btn" to="#">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    <li className="item-product" >
                        <div>
                            <div className="item-product-header">
                                <Link to="#">
                                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-10_13a4d25e-54fe-4372-8c8e-6bf83c55a4f7.png?v=1584084182" alt=""/>
                                </Link>
                            </div>
                            <div className="item-product-body">
                                <Link to="#">Potato</Link>
                                    <span>$ 25.00</span>
                                <Link className="btn" to="#">Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                    {/* {
                        handleData()
                    }               */}
                </ul>
            </div>
            {/* end list of products */}

            {/* success-modal */}
            <div className={`success-modal modale animate__animated ${fade} `}  style={{visibility: display}}>
                <div className="overlay"></div>
                <div className="content">

                    <div className="modal-left">
                        <p className="added-to-cart info">Product successfully added to your shopping cart</p>
                        <img className="product-image" src="https://cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659" alt="modal window" />
                        <div className="cart-desc">
                            <h3 className="product-title">Watermelon</h3>
                            <span className="price">$100.00</span>
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
                            <Link to="/" onClick={showSuccessModal}>Continue Shopping</Link>
                        </button>
                        <div className="success-message added-to-cart">
                            <Link to="/basket" className="btn">
                                <i className="fas fa-shopping-cart"></i>
                                View Cart
                            </Link>
                        </div>
                    </div>

                    <a className="close-modal">
                        <i className="far fa-times-circle" onClick={showSuccessModal}></i>
                    </a>

                </div>
            </div>
            {/* end success-modal */}
        </>
    )
}

export default OurProducts
