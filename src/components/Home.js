import React,{useEffect, useState} from 'react';
import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";



function Home() {

  const [myData, setmyData] = useState();
  let test = null;
  const getData = () => {
    fetch('http://localhost/mystore/test.php')
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
