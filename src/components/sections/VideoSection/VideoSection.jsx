import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="video-section">
            <div className="video-bg-overlay"></div>
            <div className="video-container">
                {/* Play Button */}
                <div className="play-button-wrapper" onClick={toggleModal}>
                    <div className="play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <div className="play-pulse"></div>
                </div>
            </div>

            {/* Video Modal */}
            {isOpen && (
                <div className="video-modal-overlay" onClick={toggleModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-modal-close" onClick={toggleModal}>×</button>
                        <div className="video-frame-container">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default VideoSection;
