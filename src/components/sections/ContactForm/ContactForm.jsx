import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="contact-grid">
                    {/* Left Column: Contact info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="info-text">
                                <h3>Call Us</h3>
                                <p>+91 12345 67890</p>
                                <p>+91 09876 54321</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="info-text">
                                <h3>Email Us</h3>
                                <p>info@rma.com</p>
                                <p>support@rma.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="info-text">
                                <h3>Visit Us</h3>
                                <p>123 Business Avenue, Tech Hub,</p>
                                <p>Bangalore, Karnataka - 560001</p>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="#" className="social-link">Facebook</a>
                            <a href="#" className="social-link">Instagram</a>
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">Twitter</a>
                        </div>

                        
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-container">
                        <form className="main-contact-form">
                            <div className="form-group full-width">
                                <label>Your Name</label>
                                <input type="text" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="Your phone number" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="Your email address" required />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea placeholder="How can we help you?" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                                <span className="btn-icon">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
