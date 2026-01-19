import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">

                    <h1 className="hero-title">
                        Build Your Future Beyond Borders<span className="highlight"></span>
                    </h1>

                    <p className="hero-subtitle">
                        Join the next class with <span className="bold">world-recognized certificate</span>, live classes with dedicated teachers and schedules that fit your life.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">Sign Up Now!</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
