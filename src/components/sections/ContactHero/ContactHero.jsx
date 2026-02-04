import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
    return (
        <section
            className="contact-hero"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="contact-hero-overlay"></div>
            <div className="container">
                <div className="contact-hero-content">
                    <span className="sub-heading">GET IN TOUCH</span>
                    <h1 className="contact-hero-title">
                        Let's Start Your <br />
                        <span>Global Career Journey</span>
                    </h1>
                    <p className="contact-hero-subtitle">
                        Have questions about working abroad? Our experts are here to guide you
                        every step of the way. Reach out to us today.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
