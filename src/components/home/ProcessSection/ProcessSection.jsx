import React, { useState, useEffect, useRef } from 'react';
import './ProcessSection.css';

const processSteps = [
    {
        id: 1,
        title: "Profile Evaluation",
        description: "We analyze your professional background, skills, and career goals to determine the best opportunities for you.",
        step: "STEP 01"
    },
    {
        id: 2,
        title: "Job Matching",
        description: "Our experts match your profile with suitable job openings across our extensive network of global employers.",
        step: "STEP 02"
    },
    {
        id: 3,
        title: "Interview Scheduling",
        description: "We coordinate with employers to set up interviews and provide guidance to help you succeed.",
        step: "STEP 03"
    },
    {
        id: 4,
        title: "Visa Processing",
        description: "Our legal team handles all documentation and applications to ensure a smooth and compliant visa process.",
        step: "STEP 04"
    },
    {
        id: 5,
        title: "Travel & Onboarding",
        description: "We assist with travel arrangements and help you settle into your new career and country seamlessly.",
        step: "STEP 05"
    }
];

const ProcessSection = () => {
    const [activeStep, setActiveStep] = useState(1);
    const stepRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px', // Trigger when step is around the center
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const stepId = parseInt(entry.target.getAttribute('data-step-id'));
                    setActiveStep(stepId);
                }
            });
        }, observerOptions);

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="process-section">
            <div className="container">
                <div className="process-header">
                    <span className="sub-title">TRUST & TRANSPARENCY</span>
                    <h2 className="section-title">Our Process </h2>
                    <div className="title-divider"></div>
                </div>

                <div className="timeline-container">
                    {/* The Background Line */}
                    <div className="timeline-line">
                        <div
                            className="timeline-progress"
                            style={{
                                height: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%`
                            }}
                        ></div>
                    </div>

                    <div className="steps-wrapper">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`process-step-item ${index % 2 === 0 ? 'left' : 'right'} ${activeStep === step.id ? 'active' : ''}`}
                                data-step-id={step.id}
                                ref={(el) => (stepRefs.current[index] = el)}
                            >
                                <div className="step-content-card">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                    <div className="card-arrow"></div>
                                </div>

                                <div className="step-node-container">
                                    <div className="step-number-label">{step.step}</div>
                                    <div className={`step-node ${activeStep >= step.id ? 'completed' : ''}`}>
                                        <div className="node-inner">
                                            {activeStep >= step.id && (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
