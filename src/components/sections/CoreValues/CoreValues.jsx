import React from 'react';
import { motion } from 'framer-motion';
import './CoreValues.css';

const CoreValues = () => {
    const values = [
        {
            title: "Global Accessibility",
            description: "Providing seamless access to career opportunities across borders.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            )
        },
        {
            title: "Seamless Transition",
            description: "Ensuring a smooth relocation process for professionals and their families.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                </svg>
            )
        },
        {
            title: "Ethical Recruitment",
            description: "Upholding the highest standards of transparency and fairness in hiring.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            title: "Career Advancement",
            description: "Focusing on long-term growth and professional development abroad.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 19 7-7 3 3-7 7-3-3Z"></path>
                    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"></path>
                    <path d="m2 2 8.833 8.833"></path>
                    <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                </svg>
            )
        },
        {
            title: "Cultural Support",
            description: "Providing guidance to adapt and thrive in new international environments.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l4-4V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10Z"></path>
                    <path d="M3 20c0-3.3 2.7-6 6-6"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                </svg>
            )
        },
        {
            title: "Expert Compliance",
            description: "Navigating complex legal and visa requirements with precision.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e31e24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                </svg>
            )
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="values-section">
            <div className="container">
                <div className="values-header">
                    <span className="sub-heading">OUR CORE VALUES</span>
                    <h2 className="main-title">The Principles of Global Success</h2>
                </div>

                <motion.div
                    className="values-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="value-card"
                            variants={itemVariants}
                        >
                            <div className="value-icon-box">
                                {value.icon}
                            </div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoreValues;
