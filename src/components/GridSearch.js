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
            <div className="container" style={{ marginTop: "10px" }}>
                <div className="row">

                    <div className="col-lg-3 col-left" onClick={showAllCat}>
                        <span>All Categories</span>
                        <i className="fas fa-angle-down"></i>
                    </div>

                    <div className="col col-right">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="container">
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

            <div id="carouselExampleCaptions" className="row carousel slide" style={{marginTop: "30px"}}>

                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-1_2000x.jpg?v=1581341041" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block slider1">
                            <h5 style={{ color: "#000000", fontSize: "18px"}}>Natural Health care Ingredients</h5>
                            <h2 style={{ color: "#d08126", fontWeight: "bold", fontFamily: "Yeseva One, cursive"}}>Grocery Shopping</h2>
                            <h4 style={{ color: "#000000", fontSize: "26px"}}>Save upto 30% off</h4>
                            <Link className="slider1-link btn" to="#" style={{ background: "#d8943a", color: "#ffffff", borderRadius: "30px"}}>Shop now</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-2_2000x.jpg?v=1581341045" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block slider2">
                            <h5 style={{ color: "#000000", fontSize: "18px", fontWeight: "600", fontFamily: "Poppins", textTransform: "uppercase"}}>Groca</h5>
                            <h2 style={{ color: "red", fontWeight: "bold", fontFamily: "Yeseva One, cursive", fontSize: "30px"}}>Vegetable 100% organic</h2>
                            <h4 style={{ color: "#000000", fontSize: "18px", fontFamily: "Poppins"}}>Natural Health Care Ingredients</h4>
                            <h4 style={{ color: "#000000", fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>50% off</h4>
                            <Link className="slider2-link btn" to="#" style={{ background: "#ffffff", color: "red", borderRadius: "30px"}}>Shop now</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-3_2000x.jpg?v=1581341055" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
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
        </>
    )
}

export default GridSearch;
