import React, { useRef, useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftInitial, setScrollLeftInitial] = useState(0);
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

    // Momentum scrolling states
    const [velocity, setVelocity] = useState(0);
    const requestRef = useRef();
    const lastXRef = useRef(0);
    const lastTimeRef = useRef(Date.now());

    const testimonials = [
        // ... (existing testimonials)
        { id: 1, name: 'Karan', rating: 5, avatar: 'https://i.pravatar.cc/150?u=karan', text: 'My experience with RMA was exceptional. They guided me through the entire university selection process and made the visa application feel effortless. Highly recommended for anyone looking to study in Australia!' },
        { id: 2, name: 'Catherine', rating: 5, avatar: 'https://i.pravatar.cc/150?u=catherine', text: 'The team is highly professional and knowledgeable. They responded to all my queries in a timely manner with loads of information about scholarship opportunities and accommodation options.' },
        { id: 3, name: 'Peter', rating: 5, avatar: 'https://i.pravatar.cc/150?u=peter', text: 'I was confused about which course to choose, but the counseling session at RMA cleared all my doubts. They helped me with my SOP and LORs, ensuring a 100% success rate in my application.' },
        { id: 4, name: 'Aisha', rating: 5, avatar: 'https://i.pravatar.cc/150?u=aisha', text: 'Seamless process from start to finish. The pre-departure briefing was particularly helpful for a first-time international student like me. Thank you RMA team!' },
        { id: 5, name: 'Rahul', rating: 5, avatar: 'https://i.pravatar.cc/150?u=rahul', text: 'Highly recommend RMA for their UK student visa services. Their expertise in document verification and mock interviews gave me the confidence I needed.' },
        { id: 6, name: 'Sneha', rating: 5, avatar: 'https://i.pravatar.cc/150?u=sneha', text: 'Top-notch service! They helped me find the perfect university in Canada that fit my budget and academic goals. The staff is incredibly supportive.' },
        { id: 7, name: 'James', rating: 5, avatar: 'https://i.pravatar.cc/150?u=james', text: 'Great experience with the US F1 visa process. RMA made the complex documentation look simple and easy to follow. 10/10 service!' },
        { id: 8, name: 'Meera', rating: 5, avatar: 'https://i.pravatar.cc/150?u=meera', text: 'Their SOP editing service is amazing. I got into my dream university in Germany with a full scholarship, all thanks to RMA\'s expert guidance.' }
    ];

    const displayTestimonials = [...testimonials, ...testimonials];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const itemWidth = 430;
            let scrollTo;

            if (direction === 'right') {
                scrollTo = scrollLeft + itemWidth;
                if (scrollLeft >= (scrollWidth / 2) - clientWidth) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
                    scrollRef.current.scrollTo({ left: itemWidth, behavior: 'smooth' });
                    return;
                }
            } else {
                scrollTo = scrollLeft - itemWidth;
                if (scrollLeft <= 0) {
                    scrollRef.current.scrollTo({ left: scrollWidth / 2, behavior: 'instant' });
                    scrollRef.current.scrollTo({ left: scrollWidth / 2 - itemWidth, behavior: 'smooth' });
                    return;
                }
            }
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const animateMomentum = () => {
        if (!scrollRef.current) return;

        setVelocity((prevVelocity) => {
            const friction = 0.95;
            const newVelocity = prevVelocity * friction;

            if (Math.abs(newVelocity) > 0.1) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                let nextScrollLeft = scrollLeft - newVelocity;

                // Handle infinite loop boundaries during momentum
                if (nextScrollLeft >= (scrollWidth / 2) - clientWidth) {
                    nextScrollLeft = 0;
                } else if (nextScrollLeft <= 0) {
                    nextScrollLeft = (scrollWidth / 2) - clientWidth;
                }

                scrollRef.current.scrollLeft = nextScrollLeft;
                requestRef.current = requestAnimationFrame(animateMomentum);
                return newVelocity;
            } else {
                return 0;
            }
        });
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            if (!scrollRef.current || isDragging || velocity !== 0 || (now - lastInteractionTime < 5000)) return;

            const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
            const itemWidth = 430;

            if (scrollLeft >= (scrollWidth / 2) - clientWidth) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'instant' });
                setTimeout(() => {
                    if (scrollRef.current) scrollRef.current.scrollTo({ left: itemWidth, behavior: 'smooth' });
                }, 50);
            } else {
                scrollRef.current.scrollTo({ left: scrollLeft + itemWidth, behavior: 'smooth' });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isDragging, lastInteractionTime, velocity]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        cancelAnimationFrame(requestRef.current);
        setVelocity(0);
        setLastInteractionTime(Date.now());
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeftInitial(scrollRef.current.scrollLeft);

        lastXRef.current = e.pageX;
        lastTimeRef.current = Date.now();
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            requestRef.current = requestAnimationFrame(animateMomentum);
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            requestRef.current = requestAnimationFrame(animateMomentum);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const now = Date.now();
        const deltaTime = now - lastTimeRef.current;
        const deltaX = e.pageX - lastXRef.current;

        if (deltaTime > 0) {
            setVelocity(deltaX / deltaTime * 15); // Calculate velocity
        }

        setLastInteractionTime(now);
        lastXRef.current = e.pageX;
        lastTimeRef.current = now;

        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeftInitial - walk;
    };



    return (
        <section className="testimonials">
            <div className="container">
                {/* Trustpilot Header */}
                <div className="testimonials-header">
                    <h2 className="header-main-title">Read reviews, apply with confidence.</h2>
                </div>

                <div className="testimonials-content">
                    {/* Left Navigation */}
                    <div className="testimonials-nav">
                        <div className="quote-icon">
                            <svg viewBox="0 0 24 24" width="64" height="64" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <path d="M14.017 21C12.9124 21 12.017 20.1046 12.017 19V15C12.017 13.8954 12.9124 13 14.017 13H15.017" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <path d="M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <path d="M3.017 21C1.91243 21 1.017 20.1046 1.017 19V15C1.017 13.8954 1.91243 13 3.017 13H4.017" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                        </div>
                        <h3 className="nav-title">What our students are saying</h3>
                        <div className="slider-controls">
                            <button className="ctrl-btn" onClick={() => scroll('left')}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <div className="progress-bar">
                                <div className="progress-fill"></div>
                            </div>
                            <button className="ctrl-btn" onClick={() => scroll('right')}>
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Scrollable Grid */}
                    <div className={`testimonials-grid ${isDragging ? 'dragging' : ''}`}
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        {displayTestimonials.map((t, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="card-bubble">
                                    <p className="testimonial-text">{t.text}</p>
                                    <div className="star-rating">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <svg key={i} viewBox="0 0 24 24" width="16" height="16" fill="#00b67a">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="bubble-arrow"></div>
                                </div>
                                <div className="user-info">
                                    <img src={t.avatar} alt={t.name} className="user-avatar" />
                                    <div className="user-details">
                                        <h4 className="user-name">{t.name}</h4>
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

export default Testimonials;
