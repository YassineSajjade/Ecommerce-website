import React,{useEffect, useState} from 'react';

import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";
import SupportBlock from "./SupportBlock";
import Footer from "./Footer";




function Home(props) {

  const [myData, setmyData] = useState();
  const [cartCount, setCartCount] = useState(props.cartCounApp);
  const [prdToCartO, setPrdToCartO] = useState([]);
  

  const getData = () => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      setmyData(data.products);
    })
    .catch(err => console.log(err));
  }

  
  useEffect(() => {
    getData();
  },[]);

  

      // callback function to handle data from childs
      const handleCallback = (cartCountPtoParent,prdToCart) =>{
        setCartCount(cartCountPtoParent);
        setPrdToCartO(prdToCart);
     }
  
     //function handling data to send it to Parent(App)
    props.parentCallBackApp(cartCount, prdToCartO);
 

    return (
        <>
          <Navbar cartCountP={cartCount} />
          <GridSearche/>  
          <OurProducts myDataP={myData} cartCountP={cartCount} parentCallBackP={handleCallback}/>
          <SupportBlock/>
          <Footer/>
        </>
    )
}

export default Home
