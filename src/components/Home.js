import React,{useEffect, useState} from 'react';
import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";



function Home() {

  const [myData, setmyData] = useState();

  const getData = () => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
      setmyData(data);
    });
  }

  
  useEffect(() => {
    getData();
    return () => {
      getData();
    }
  });

  
  

    return (
        <>
          <Navbar/>
          <GridSearche/>  
          <OurProducts myData={myData}/>
        </>
    )
}

export default Home
