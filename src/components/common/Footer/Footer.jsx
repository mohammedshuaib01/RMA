import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info Column */}
                    <div className="footer-col info-col">
                        <div className="footer-logo">
                            <h2>RMA<span>↗</span></h2>
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
                                    <p>Cyber House, Kakkanad, Kochi, Kerala, India</p>
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
                            <a href="#">Facebook</a>
                            <a href="#">Linkedin</a>
                            <a href="#">Instagrams</a>
                            <a href="#">Behance</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Our Services</h3>
                        <ul className="footer-links">
                            <li><a href="#">University Selection</a></li>
                            <li><a href="#">Visa Assistance</a></li>
                            <li><a href="#">Course Counseling</a></li>
                            <li><a href="#">Scholarship Guidance</a></li>
                            <li><a href="#">SOP & LOR Services</a></li>
                            <li><a href="#">Pre-departure Briefing</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#countries">Destinations</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Refund & Cancellation</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <button className="back-to-top" onClick={scrollToTop}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <p>Copyright © 2025 . All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
