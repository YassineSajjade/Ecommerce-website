import React,{useEffect, useState} from 'react';
import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";
import SupportBlock from "./SupportBlock";
import Footer from "./Footer";



function Home() {

  const [myData, setmyData] = useState();

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

  
  

    return (
        <>
          <Navbar/>
          <GridSearche/>  
          <OurProducts myData={myData}/>
          <SupportBlock/>
          {/* <Footer/> */}
        </>
    )
}

export default Home
