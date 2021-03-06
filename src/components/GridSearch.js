import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./GridSearch.css";

function GridSearch() {

    const [showCat, setCat] = useState(false);
    const [display, setDisplay] = useState("none");

    const showAllCat = () => {
        if (!showCat) {
            setDisplay("block");
            setCat(true);
        } else {
            setDisplay("none");
            setCat(false);
        }
    }

    return (
        <>
        {/* grid search section */}
            <div className="container" style={{ marginTop: "10px" }}>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-left" onClick={showAllCat}>
                        <span>All Categories</span>
                        <i className="fas fa-angle-down"></i>
                    </div>

                    <div className="col-lg-9 col-md-6 col-right">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className="row row-col-list">
                    <div className="col-list" style={{ display: display }}>
                        <ul>
                            <li>Fruits</li>
                            <li>Vegitables</li>
                            <li>Flour</li>
                            <li>Cookies</li>
                            <li>Meat</li>
                        </ul>
                    </div>
                </div>
            </div>
        {/* end grid search section */}

        {/* start carousel */}
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{ marginTop: "30px" }}>

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item citem1 mobile-item1 active">
                        {/* <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-1_2000x.jpg?v=1581341041" className="d-block w-100" alt="..." /> */}
                        <div className="carousel-caption  d-md-block slider1">
                            <h5 className="animate__animated animate__slideInRight" style={{ color: "#000000", fontSize: "18px" }}>Natural Health care Ingredients</h5>
                            <h2 className="animate__animated animate__slideInRight" style={{ color: "#d08126", fontWeight: "bold", fontFamily: "Yeseva One, cursive" }}>Grocery Shopping</h2>
                            <h4 className="animate__animated animate__slideInRight" style={{ color: "#000000", fontSize: "26px" }}>Save upto 30% off</h4>
                            <Link className="slider1-link btn animate__animated animate__slideInRight" to="#" style={{ background: "#d8943a", color: "#ffffff", borderRadius: "30px" }}>Shop now</Link>
                        </div>
                    </div>
                    <div className="carousel-item citem2 mobile-item2">
                        {/* <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-2_2000x.jpg?v=1581341045" className="d-block w-100" alt="..." /> */}
                        <div className="carousel-caption  d-md-block slider2">
                            <h5 className="animate__animated animate__slideInDown" style={{ color: "#000000", fontSize: "18px", fontWeight: "600", fontFamily: "Poppins", textTransform: "uppercase" }}>Groca</h5>
                            <h2 className="animate__animated animate__slideInRight" style={{ color: "red", fontWeight: "bold", fontFamily: "Yeseva One, cursive", fontSize: "30px" }}>Vegetable 100% organic</h2>
                            <h4 className="animate__animated animate__zoomIn" style={{ color: "#000000", fontSize: "18px", fontFamily: "Poppins" }}>Natural Health Care Ingredients</h4>
                            <h4 className="animate__animated animate__slideInLeft" style={{ color: "#000000", fontSize: "22px", fontFamily: "Poppins", fontWeight: "700" }}>50% off</h4>
                            <Link className="slider2-link btn animate__animated animate__slideInUp" to="#" style={{ background: "#ffffff", color: "red", borderRadius: "30px" }}>Shop now</Link>
                        </div>
                    </div>
                    <div className="carousel-item citem3 mobile-item3">
                        {/* <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-3_2000x.jpg?v=1581341055" className="d-block w-100" alt="..." /> */}
                        <div className="carousel-caption d-md-block slider3">
                            <div className="icon" style={{ marginBottom: "10px" }}><img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-icon_100X.png?v=1581426760" alt="" style={{ height: "100%"}}/></div>
                            <h5 className="animate__animated animate__slideInRight" style={{ color: "#000000", fontSize: "18px" }}>100% Healthy & Affordable</h5>
                            <h2 className="animate__animated animate__slideInRight" style={{ color: "#4a8601", fontWeight: "bold", fontFamily: "Yeseva One, cursive" }}>Organic Vegitables</h2>
                            <h4 className="animate__animated animate__slideInRight" style={{ color: "#000000", fontSize: "26px" }}>Small Changes Big Differnce</h4>
                            <Link className="slider3-link btn" to="#" style={{ background: "#ffffff", color: "#4a8601", borderRadius: "30px" }}>Shop now</Link>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        {/* end carousel */}

        {/* start section types */}
            <div style={{marginTop: "30px",marginBottom: "30px"}}>
                <div className="container">
                    <div className="row" style={{margin: "0"}}>
                        <div className="divMain col-lg-6 col-sm-6" style={{height: "250px"/*,display: "flex"*/}}>
                            <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/img-1_1920X.jpg?v=1580208074" alt="" style={{width: "100%", height: "100%"}} /></Link>
                            <div className="div-radius" style={{backgroundColor: "#f9b1af"}}>
                                <h5 style={{fontSize: "30px",fontWeight: "bold",fontFamily:"Yeseva One, cursive"}}>Veggies</h5>
                                <h4 style={{fontSize: "24px",fontWeight: "400",lineHeight: "1.4"}}><span style={{fontWeight: "700"}}>100%</span> Organic Products</h4>
                                <Link className="btn btnType" to="/" style={{backgroundColor: "#fe6d30" }}>Buy Now</Link>
                            </div>
                        </div>
                        <div className="divMain col-lg-6 col-sm-6" style={{height: "250px"/*,paddingLeft: "0px",display: "flex"*/}}>
                            <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/img-2.jpg?v=1580208099" alt="" style={{width: "100%", height: "100%"}}/></Link>
                            <div className="div-radius" style={{backgroundColor: "#ffdb4f"}}>
                                <h5 style={{fontSize: "30px",fontWeight: "bold",fontFamily:"Yeseva One, cursive"}}>Fruits</h5>
                                <h4 style={{fontSize: "24px",fontWeight: "400",lineHeight: "1.4"}}><span style={{fontWeight: "700"}}>100%</span> Organic Products</h4>
                                <Link className="btn btnType" to="/" style={{backgroundColor:"#f4a602"}}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        {/* end section types */}
       
       
       </>
    )
}

export default GridSearch;
