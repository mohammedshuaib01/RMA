import React from 'react';
import { motion } from 'framer-motion';
import './CeoMessage.css';

const CeoMessage = () => {
    return (
        <section className="ceo-section">
            <div className="container">
                <div className="ceo-grid">
                    <motion.div
                        className="ceo-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="ceo-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                alt="CEO Portrait"
                                className="ceo-image"
                            />
                            <div className="ceo-experience-badge">
                                <span className="years">15+</span>
                                <span className="text">Years of Excellence</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="ceo-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="quote-icon">
                            <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0625 0C6.27891 0 0 6.27891 0 14.0625V42.1875C0 43.7438 1.25625 45 2.8125 45H22.5C24.0562 45 25.3125 43.7438 25.3125 42.1875V22.5C25.3125 20.9438 24.0562 19.6875 22.5 19.6875H11.25V14.0625C11.25 12.5156 12.5156 11.25 14.0625 11.25H22.5C24.0562 11.25 25.3125 9.99375 25.3125 8.4375V2.8125C25.3125 1.25625 24.0562 0 22.5 0H14.0625ZM48.75 0C40.9664 0 34.6875 6.27891 34.6875 14.0625V42.1875C34.6875 43.7438 35.9438 45 37.5 45H57.1875C58.7438 45 60 43.7438 60 42.1875V22.5C60 20.9438 58.7438 19.6875 57.1875 19.6875H45.9375V14.0625C45.9375 12.5156 47.2031 11.25 48.75 11.25H57.1875C58.7438 11.25 60 9.99375 60 8.4375V2.8125C60 1.25625 58.7438 0 57.1875 0H48.75Z" fill="#e31e24" opacity="0.1" />
                            </svg>
                        </div>
                        <span className="sub-heading">CEO'S MESSAGE</span>
                        <h2 className="ceo-title">Leading with Integrity and Vision</h2>
                        <div className="ceo-text">
                            <p>
                                "At RMA, our mission has always been clear: to bridge the gap between global opportunities and talented professionals. We believe that relocation isn't just about moving places; it's about expanding horizons and building sustainable careers."
                            </p>
                            <p>
                                "Every success story from our clients fuels our commitment to excellence. We are dedicated to providing transparent, reliable, and expert guidance to ensure your international journey is smooth and successful. Let's build your future together."
                            </p>
                        </div>
                        <div className="ceo-signature-area">
                            <div className="ceo-info">
                                <h4 className="ceo-name">Johnathan Smith</h4>
                                <p className="ceo-designation">Founder & CEO, RMA</p>
                            </div>
                            <div className="signature-img">
                                {/* Signature dummy or decorative font */}
                                <span className="handwritten">J. Smith</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CeoMessage;
