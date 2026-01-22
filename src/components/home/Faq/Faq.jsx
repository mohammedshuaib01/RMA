import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "How this work?",
            answer: "Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
        },
        {
            question: "Are there any additional fee?",
            answer: "Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
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
                    <h2 className="faq-title">Any questions? <br /> We got you.</h2>
                    <p className="faq-description">
                        Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
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
