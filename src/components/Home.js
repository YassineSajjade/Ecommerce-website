import React,{useEffect, useState} from 'react';

import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";
import SupportBlock from "./SupportBlock";
import Footer from "./Footer";




function Home(props) {

  const [myData, setmyData] = useState();
  const [cartCount, setCartCount] = useState(props.cartCounApp);
  // if(props.cartCountApp != null){
  //   setCartCount(props.cartCountApp);
  // }else{
  //   console.log("props == null");
  // }
  
  // const basket = <Basket cartCountP={cartCount} />;
  

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
    // setCartCount(cartCountApp);
  },[]);

  

      // callback function to handle data from childs
      const handleCallback = (childData) =>{
        setCartCount(childData);
     }
  

  props.parentCallBackApp(cartCount);
 

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
