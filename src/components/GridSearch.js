import React from 'react';
import "./GridSearch.css";

function GridSearch() {
    return (
        <div className="container" style={{marginTop: "10px", marginBottom:"10px"}}>
            <div className="row">

                <div className="col-lg-3 col-left">
                    <span>All Categories</span>
                    <i className="fas fa-angle-down"></i>
                </div>

                <div className="col col-right">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default GridSearch
