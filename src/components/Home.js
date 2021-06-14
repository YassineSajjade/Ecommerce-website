import React,{useState} from 'react';

import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";
import SupportBlock from "./SupportBlock";
import Footer from "./Footer";




function Home(props) {

  // const [prdToCartO, setPrdToCartO] = useState([]);
  

  

      // callback function to handle data from childs
    //   const handleCallback = (cartCountPtoParent) =>{
    //     setCartCount(cartCountPtoParent);
    //     setPrdToCartO(prdToCart);
    //  }
  
     //function handling data to send it to Parent(App)
    //props.parentCallBackApp(cartCount, prdToCartO);
 

    return (
        <>
          <Navbar/>
          <GridSearche/>  
          {/* <OurProducts myDataP={myData} cartCountP={cartCount} parentCallBackP={handleCallback}/> */}
          <OurProducts />
          <SupportBlock/>
          <Footer/>
        </>
    )
}

export default Home
