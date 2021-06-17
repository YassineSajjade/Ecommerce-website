import React from 'react';

import Navbar from "./Navbar";
import GridSearche from "./GridSearch";
import OurProducts from "./OurProducts";
import SupportBlock from "./SupportBlock";
import Footer from "./Footer";




function Home() {

    return (
        <>
          <Navbar/>
          <GridSearche/>  
          <OurProducts />
          <SupportBlock/>
          <Footer/>
        </>
    )
}

export default Home
