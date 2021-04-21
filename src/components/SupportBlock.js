import React from 'react';
import './SupportBlock.css';
import { Link } from 'react-router-dom';

function SupportBlock() {
    return (
        <>
            <div className="grid-uniform">
                <div className="container">
                    {/* start ul */}
                    <ul className="support-block" style={{ background: "#28a745" }}>

                        <li className="grid-item  animate__animated  animate__fadeInUp">
                            <div className="support-section ">
                                <div className="support-icon" style={{ background: "#ffffff" }}>
                                    <Link className="icon" to="#" style={{ color: "#28a745" }}>
                                        <i class="fas fa-truck"></i>
                                    </Link>
                                </div>
                                <div className="support-text">
                                    <h5 style={{ color: "#ffffff" }}>Free Shipping</h5>
                                    <p className="desc" style={{ color: "#ffffff" }}>WorldWide</p>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item  animate__animated  animate__fadeInUp">
                            <div className="support-section">
                                <div className="support-icon" style={{ background: "#ffffff" }}>
                                    <Link className="icon" to="#" style={{ color: "#28a745" }}>
                                        <i class="fas fa-phone"></i>
                                    </Link>
                                </div>
                                <div className="support-text">
                                    <h5 style={{ color: "#ffffff" }}>HelpLine</h5>
                                    <p className="desc" style={{ color: "#ffffff" }}>+(000)123-456</p>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item  animate__animated  animate__fadeInUp">
                            <div className="support-section">
                                <div className="support-icon" style={{ background: "#ffffff" }}>
                                    <Link className="icon" to="#" style={{ color: "#28a745" }}>
                                        <i class="fas fa-headphones"></i>
                                    </Link>
                                </div>
                                <div className="support-text">
                                    <h5 style={{ color: "#ffffff" }}>24x7</h5>
                                    <p className="desc" style={{ color: "#ffffff" }}>Customer Support</p>
                                </div>
                            </div>
                        </li>

                        <li className="grid-item  animate__animated  animate__fadeInUp">
                            <div className="support-section">
                                <div className="support-icon" style={{ background: "#ffffff" }}>
                                    <Link className="icon" to="#" style={{ color: "#28a745" }}>
                                        <i class="fas fa-exchange-alt"></i>
                                    </Link>
                                </div>
                                <div className="support-text">
                                    <h5 style={{ color: "#ffffff" }}>Returns</h5>
                                    <p className="desc" style={{ color: "#ffffff" }}>and Exchange</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                    {/* end ul */}
                </div>
            </div>
            <div className="invisible-medium"></div>
        </>
    )
}

export default SupportBlock;