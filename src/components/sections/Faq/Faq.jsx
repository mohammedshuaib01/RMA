import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "How does it work?",
            answer: "Our process is streamlined to ensure you get the best career opportunities. We handle everything from documentation to visa processing and post-arrival support."
        },
        {
            question: "Are there any additional fees?",
            answer: "We maintain complete transparency in our pricing. All costs are discussed upfront, and there are no hidden charges throughout the process."
        },
        {
            question: "How can I get the app?",
            answer: "Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
        },
        {
            question: "What features do you offer and other not?",
            answer: "Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-left">
                    <span className="sub-title">FAQ</span>
                    <h2 className="faq-title">Any questions? <br /> We got you.</h2>
                    <p className="faq-description">
                        Find answers to common questions about our services and process. We're here to help you navigate your journey with confidence.
                    </p>
                </div>

                <div className="faq-right">
                    <div className="accordion">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            >
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="accordion-question">{item.question}</h3>
                                    <span className="accordion-icon">
                                        {activeIndex === index ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="accordion-content">
                                    <p className="accordion-answer">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
