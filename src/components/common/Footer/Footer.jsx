import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility =() =>{

            if (window.scrollY>500){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }

         window.addEventListener('scroll', toggleVisibility);   

         return () => window.removeEventListener('scroll', toggleVisibility);
        
    }, [])



    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info Column */}
                    <div className="footer-col info-col">
                        <div className="footer-logo">
                            <img src="rmafooterlogo.png" alt="" />
                        </div>
                        <p className="footer-desc">
                            Your trusted partner in international education. We empower students
                            to achieve their global academic dreams through expert guidance and
                            seamless visa processing.
                        </p>

                        <div className="company-info">
                            <h3>Company Information</h3>
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <div className="info-text">
                                    <h4>Indian Address</h4>
                                    <p>2nd Floor, Kalavath Tower, Civil Line Rd, Palarivattom Junction, Sonia Nagar, Palarivattom, Kochi, Ernakulam, Kerala 682025</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="icon">📍</span>
                                <div className="info-text">
                                    <h4>UAE Address</h4>
                                    <p>Near Confident Trips Karama, Dubai, United Arab Emirates</p>
                                </div>
                            </div>
                            <div className="contact-details">
                                <p className="contact-line">Send mail: info@rma-consultancy.com</p>
                                <p className="contact-line">Call us: +91 89213 52513</p>
                            </div>
                        </div>

                        <div className="footer-socials">
                            <a href="https://www.facebook.com/rma.overseas/">Facebook</a>
                            <a href="https://www.linkedin.com/company/rma-overseas/?originalSubdomain=in">Linkedin</a>
                            <a href="https://www.instagram.com/rma_international_services/?hl=en">Instagram</a>

                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Our Countries</h3>
                        <ul className="footer-links">
                            <li><a href="#">United States</a></li>
                            <li><a href="#">United Kingdom</a></li>
                            <li><a href="#">Canada</a></li>
                            <li><a href="#">Australia</a></li>
                            <li><a href="#">New Zealand</a></li>

                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#countries">Our Countries</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>

                        </ul>
                    </div>
                </div>



                <div className="footer-bottom">
                    <button className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
