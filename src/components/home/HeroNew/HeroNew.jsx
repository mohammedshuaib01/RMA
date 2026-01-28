import React from 'react';
import { motion } from 'framer-motion';
import './HeroNew.css';

const HeroNew = () => {
    const title = "Build Your Career";
    const highlight = "Abroad with Trusted Experts";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="hero-new-bg">
            <div className="hero-new-overlay"></div>
            <div className="hero-new-container">
                {/* Central Content Area */}
                <div className="hero-new-content">
                    <motion.h1
                        className="hero-new-title"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split(" ").map((word, idx) => (
                            <motion.span key={idx} variants={itemVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        <motion.span className="light-text" variants={itemVariants}>
                            {highlight}
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="hero-new-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Empowering professionals across all sectors to achieve <br />
                        their global career aspirations.
                    </motion.p>

                    <motion.button
                        className="cta-button-red"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Now
                        <span className="arrow-icon">→</span>
                    </motion.button>

                    {/* Decorative dashed line elements */}
                    <div className="vertical-dash top"></div>
                    <div className="vertical-dash bottom"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroNew;
