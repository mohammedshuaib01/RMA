import React from 'react';
import './CountryHero.css';

const CountryHero = () => {
    return (
        <section
            className="country-hero"
            style={{
                backgroundImage: "url('/hero-bg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="country-hero-overlay"></div>
            <div className="container">
                <div className="country-hero-content">
                    <span className="sub-heading">EXPLORE DESTINATIONS</span>
                    <h1 className="country-hero-title">
                        Your Gateway to <br />
                        <span>Global Opportunities</span>
                    </h1>
                    <p className="country-hero-subtitle">
                        Discover world-class career destinations and let us help you
                        navigate your journey to a successful international career.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CountryHero;
