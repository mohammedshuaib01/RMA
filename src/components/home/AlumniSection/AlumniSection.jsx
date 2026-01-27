import React, { useState } from 'react';
import './AlumniSection.css';

const AlumniSection = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const alumni = [
        {
            id: 1,
            name: "Emily Manekshaw",
            title: "COO, Prime Inc.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 2,
            name: "Aleena Alphons Roy",
            title: "Product Manager, Orion",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 3,
            name: "Anoop Sukumaran",
            title: "Lead Engineer, Cromwell",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        {
            id: 4,
            name: "Heath Badger",
            title: "CEO, Insidious Inc.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
    ];

    return (
        <section className="alumni-light-section">
            <div className="container">
                <div className="alumni-light-header">
                    {/* <p className="subtitle">Curious how people are using RMA</p> */}
                    <span className="sub-title">CLIENT STORIES</span>
                    <h2 className="title">Hear What Our Clients Are Saying</h2>
                </div>

                <div className="alumni-light-grid">
                    {alumni.map((person) => (
                        <div key={person.id} className="alumni-light-card" onClick={() => setSelectedVideo(person.videoUrl)}>
                            <div className="card-media">
                                <img src={person.image} alt={person.name} className="main-img" />
                                <div className="play-button-overlay">
                                    <div className="play-circle">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="card-profile">
                                <div className="profile-avatar">
                                    <img src={person.image} alt={person.name} />
                                </div>
                                <div className="profile-meta">
                                    <h3 className="profile-name">{person.name}</h3>
                                    <p className="profile-title">{person.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {selectedVideo && (
                <div className="video-modal" onClick={() => setSelectedVideo(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedVideo(null)}>&times;</button>
                        <iframe
                            src={`${selectedVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AlumniSection;
