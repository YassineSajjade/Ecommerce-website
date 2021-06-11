import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import "./OurProducts.css";
import './ModalSuccess';
import ModalSuccess from './ModalSuccess';
import { DataContext } from '../App';

function OurProducts({parentCallBackP}) {

    //context data
    const value = useContext(DataContext);

    // const [prdToCart, setPrdToCart] = useState([]);

    // 
    const [display,setDisplay] = useState("hidden");
    const [show,setShow] = useState(false);
    const [fade,setFade] = useState("animate__fadeOut");
    const [cartCountPtoParent,setCartCountPtoParent] = useState(value.cartCount);

    //states of data passing to the Modal
    const [name,setName] = useState('unvaliable');
    const [price,setPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);
    const [photo,setPhoto] = useState('');

    // display and hide success modal
    const showSuccessModal = (value) => {
        if (!show) {
            setDisplay("visible");
            setShow(true);
            setFade("animate__fadeIn");
            setCartCountPtoParent(cartCountPtoParent + 1);
            setName(value.name);
            setPrice(value.prix);
            setPhoto(value.photo);
            setTotalPrice(value.prix + totalPrice);
            // setPrdToCart(prdToCart => [...prdToCart,value]);
        } else {
            setFade("animate__fadeOut");
            setDisplay("hidden");
            setShow(false);
        }
    }
    

    const handleData = () =>{
        return(
            value.myData != null 
            ? value.myData.map( (item, index) => {
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
                                <Link className="btn" to="#" onClick={() => showSuccessModal(item)}>Add To Cart</Link>
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
   
    parentCallBackP(cartCountPtoParent);

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
                    {
                        handleData()
                    }              
                </ul>
            </div>
            {/* end list of products */}

            {/* loading-modal */}
            <div className="loading-modal modalload" style={{display: "none"}}>Loading</div>
            {/* end loading-modal */}

            {/* success-modal */}
            <ModalSuccess fadeP={fade} displayP={display} showSuccessModalP={showSuccessModal} nameP={name} priceP={price} photoP={photo} cartCountP={cartCountPtoParent} totalPriceP={totalPrice}/>
            {/* end success-modal */}

            {/* error-modal */}
            <div className="error-modal modale" style={{display: "none"}}>
                <div className="modal-inner">
                    <div className="error-title">Error</div>
                    <div className="error-message">All 1 Watermelon are in your cart.</div>
                </div>
            </div>
            {/* en error-modal */}
        </>
    )
}

export default OurProducts
