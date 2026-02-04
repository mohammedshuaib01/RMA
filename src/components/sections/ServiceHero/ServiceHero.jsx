import React from 'react';
import './ServiceHero.css';

const ServiceHero = () => {
    return (
        <section
            className="service-hero"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="service-hero-overlay"></div>
            <div className="container">
                <div className="service-hero-content">
                    <span className="sub-heading">OUR SERVICES</span>
                    <h1 className="service-hero-title">
                        Comprehensive Solutions for your <br />
                        <span>Global Career Journey</span>
                    </h1>
                    <p className="service-hero-subtitle">
                        From initial consultation to post-arrival support, we provide
                        end-to-end services to ensure your success abroad.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
