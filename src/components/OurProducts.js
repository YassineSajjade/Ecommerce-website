import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import "./OurProducts.css";
import './ModalSuccess';
import ModalSuccess from './ModalSuccess';
import ModalError from './ModalError';
import { DataContext } from '../App';

function OurProducts() {

        //get context data
    const contextValue = useContext(DataContext);

        // some state to handle SuccessModal //
    const [displaySuccess,setDisplaySuccess] = useState("hidden");
    const [showSuccess,setShowSuccess] = useState(false);
    const [fade,setFade] = useState("animate__fadeOut");

        // some state to handle ErrorModal //
    const [displayError,setDisplayError] = useState("hidden");
    const [showError,setShowError] = useState(false);
    // const [fade,setFade] = useState("animate__fadeOut");

        //states of data passing to the Modal //
    const [name,setName] = useState('unavailable'); //=> name of Produit
    const [price,setPrice] = useState(0);           //=> price of Produit
    const [photo,setPhoto] = useState('');          //=> photo of produit

        // function to show and hide success modal //
    const showSuccessModal = (product) => {
        if (!showSuccess) {
            setDisplaySuccess("visible");
            setShowSuccess(true);
            setFade("animate__fadeIn");
            contextValue.toggleCartCount() ;
            setName(product.name);
            setPrice(product.prix);
            setPhoto(product.photo);
            contextValue.toggleTotalPrice(product.prix);
            contextValue.togglePrdToCart(product);
            console.log(product.prix);
        } else {
            setFade("animate__fadeOut");
            setDisplaySuccess("hidden");
            setShowSuccess(false);
        }
    }
        //  function to show and hide error modal
    const showErrorModal = (product) => {
        if (!showError) {
            setDisplayError("visible");
            setShowError(true);
            setFade("animate__fadeIn");
            setName(product.name);
            const timer = setTimeout(()=>{
                setFade("animate__fadeOut");
                setDisplayError("hidden");
                setShowError(false);
            },3500);
            return () => clearTimeout(timer);
        } 
    }
    
        //function to handle data from context (myData)
    const handleData = () =>{
        return(
            contextValue.myData.length > 0 
            ? contextValue.myData.map( (item, index) => {
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
                                <Link className="btn" to="#" onClick={() => handleModal(item)}>Add To Cart</Link>
                            </div>
                        </div>
                    </li>
                )
                
            }) 
            // :<li className="item-product" >
            //     <div>
            //         <div className="item-product-header">
            //             <Link to="#">
            //                 <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" alt=""/>
            //             </Link>
            //         </div>
            //         <div className="item-product-body">
            //             <Link to="#">Not Available</Link>
            //                 <span>Not Available</span>
            //             <Link className="btn" to="#" >Add To Cart</Link> 
                        
            //         </div>
            //     </div>
            // </li>
            :<div style={{marginTop: '20px', marginBottom: '20px'}} ><b>No data available now, check back later</b></div>
        )
        
    }
   
        //function to verify (if we gonna show SuccessModal OR ErroModal)
    const handleModal = (theItem) =>{
            if(contextValue.prdToCart.length > 0){
                
                const checkPrds = contextValue.prdToCart.find(elem => {return elem.id === theItem.id});
                if(checkPrds){
                    showErrorModal(theItem);//=>   Product already exist
                }else{
                    showSuccessModal(theItem);//=>  Add the product if not exist
                }
            }else{
                showSuccessModal(theItem);
            }
            
     
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
                    { handleData() }              
                </ul>
            </div>
            {/* end list of products */}

            {/* loading-modal */}
            <div className="loading-modal modalload" style={{display: "none"}}>Loading</div>
            {/* end loading-modal */}

            {/* success-modal */}
            <ModalSuccess fadeP={fade} displayP={displaySuccess} showSuccessModalP={showSuccessModal} nameP={name} priceP={price} photoP={photo} />
            {/* end success-modal */}
            
            {/* error-modal */}
            <ModalError fadeP={fade} displayP={displayError} nameP={name}/>
            {/* en error-modal */}
        </>
    )
}

export default OurProducts
