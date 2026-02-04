import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="container">
                {/* Top Content Area */}
                <div className="about-top">
                    <div className="about-intro animate-on-scroll slide-right">
                        <span className="sub-heading">About Us</span>
                        <h2 className="main-title">
                            Empower Your Business's<br />
                            Financial Future Effortlessly
                        </h2>
                        <button className="btn-get-started-about">Get Started</button>
                    </div>
                    <div className="about-description animate-on-scroll slide-left">
                        <p>
                            Take control of your business's financial future with effortless strategies that
                            ensure stability and growth. Empower your decisions with expert insights,
                            streamlining your path to long-term success. Focus on what matters most—growing your business.
                        </p>
                    </div>
                </div>

                {/* Bottom Card Grid */}
                <div className="about-grid">
                    {/* Main Story Card */}
                    <div className="story-card animate-on-scroll fade-up">
                        <div className="card-image-bg">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Story"
                            />
                        </div>
                        <div className="card-content-overlay">
                            <h3 className="animate-on-scroll fade-up delay-1">Our Story</h3>
                            <p className="animate-on-scroll fade-up delay-2">
                                TechInnovate, a leading IT company, revolutionizes the industry with
                                cutting-edge AI solutions, driving innovation and connectivity for
                                businesses worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Mission and Vision Grid Column */}
                    <div className="mission-vision-grid">
                        {/* Mission Card */}
                        <div className="info-card-modern mission-card animate-on-scroll fade-up delay-1">
                            <h3>Our Mission</h3>
                            <p>To deliver innovative IT solutions that empower businesses.</p>
                        </div>

                        {/* Vision Card */}
                        <div className="info-card-modern vision-card animate-on-scroll fade-up delay-2">
                            <h3>Our Vision</h3>
                            <p>To lead in technology and shape a smarter, more connected future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
