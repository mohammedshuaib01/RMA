import React from 'react';
import './HeroNew.css';

const HeroNew = () => {
    return (
        <section className="hero-new-bg">
            <div className="hero-new-overlay"></div>
            <div className="hero-new-container">
                {/* Central Content Area */}
                <div className="hero-new-content">
                    {/* <div className="hero-badge">
                        <span>WHAT WE DO</span>
                    </div> */}
                    
                    <h1 className="hero-new-title">
                        Build Your Career <br />
                        <span className="light-text">Abroad with Trusted Experts</span>
                    </h1>

                    <p className="hero-new-subtitle">
                        Empowering professionals across all sectors to achieve <br />
                        their global career aspirations.
                    </p>

                    <button className="cta-button-red">
                        Read Success Stories
                        <span className="arrow-icon">→</span>
                    </button>
                    
                    {/* Decorative dashed line elements */}
                    <div className="vertical-dash top"></div>
                    <div className="vertical-dash bottom"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroNew;
