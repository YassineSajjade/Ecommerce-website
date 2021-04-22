import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer>
            {/* Begin Main-footer */}
            <div className="grid-uniformF">

                <div className="invisible-large"></div>

                <div className="container" style={{display: "-webkit-box"}}>

                    <div className="grid__item grid-oneQuarter">

                        <div className="footer-logo">
                            <Link to="/">
                                <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/logo-footer_400x.png?v=1581488629" alt="" />
                            </Link>
                        </div>

                        <div className="address">

                            <p style={{ color: "#ffffff" }}>
                                <i className="fas fa-home"></i>
                                No: 58 A, East Madison Street,
                                Baltimore, MD, USA 4508
                            </p>

                            <p style={{ color: "#ffffff" }}>
                                <i className="fas fa-phone"></i>
                                +1800 1234 5678
                            </p>

                        </div>

                        <i className="fas fa-envelope" style={{color: "#ffffff"}}></i>

                        <Link className="mail-address" to="mailto:support@gmail.com" style={{color: "#ffffff"}}>support@mail.com</Link> 

                        <div className="footer-social-links">

                            <ul className="social-icons">
                                <li>
                                    <Link to="#" title="Twitter" style={{color: "#ffffff"}}>
                                        <span className="fab fa-twitter"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" title="Twitter" style={{color: "#ffffff"}}>
                                        <span className="fab fa-instagram"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" title="Twitter" style={{color: "#ffffff"}}>
                                        <span className="fab fa-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" title="Twitter" style={{color: "#ffffff"}}>
                                        <span className="fab fa-linkedin"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" title="Twitter" style={{color: "#ffffff"}}>
                                        <span className="fab fa-google-plus-g"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" title="Twitter" style={{color: "#ffffff"}}>
                                        <span className="fab fa-pinterest"></span>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div className="grid__item grid-threeQuarter" style={{display: "-webkit-box"}}>

                        <div className="grid--item">
                            <h6 style={{color: "#ffffff"}}>Help</h6>
                            <ul>
                                <li>
                                    <Link to="#">Search</Link>
                                </li>
                                <li>
                                    <Link to="#">Help</Link>
                                </li>
                                <li>
                                    <Link to="#">Information</Link>
                                </li>
                                <li>
                                    <Link to="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#">Shipping Information</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="grid--item">
                            <h6 style={{color: "#ffffff"}}>Support</h6>
                            <ul>
                                <li>
                                    <Link to="#">Contact</Link>
                                </li>
                                <li>
                                    <Link to="#">Carrers</Link>
                                </li>
                                <li>
                                    <Link to="#">Refund a Returns</Link>
                                </li>
                                <li>
                                    <Link to="#">Deliveries</Link>
                                </li>
                                <li>
                                    <Link to="#">About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="grid--item">
                            <h6 style={{color: "#ffffff"}}>Information</h6>
                            <ul>
                                <li>
                                    <Link to="#">Search Terms</Link>
                                </li>
                                <li>
                                    <Link to="#">Advansed search</Link>
                                </li>
                                <li>
                                    <Link to="#">Helps & Faqs</Link>
                                </li>
                                <li>
                                    <Link to="#">Store Location</Link>
                                </li>
                                <li>
                                    <Link to="#">Orders & Returns</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="invisible-large"></div>

                </div>
            </div>

            {/* Begin simple-footer */}
            <div className="grid-copyright">
                <div className="copyright-section text-center" style={{background: "rgba(0,0,0,0)"}}>
                    <div className="container">
                        <p className="copyright" style={{color: "#ffffff"}}>Copyright<a href="https://yassinesajjade.github.io/portfolio-resume/" style={{color: "#ffffff"}}> Powred by YassineSajjade</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
