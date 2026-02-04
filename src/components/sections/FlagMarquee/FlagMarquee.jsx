import React from 'react';
import './FlagMarquee.css';

const FlagMarquee = () => {
    const flags = [
        { code: 'us', name: 'USA' },
        { code: 'gb', name: 'UK' },
        { code: 'ca', name: 'Canada' },
        { code: 'au', name: 'Australia' },
        { code: 'de', name: 'Germany' },
        { code: 'fr', name: 'France' },
        { code: 'jp', name: 'Japan' },
        { code: 'in', name: 'India' },
        { code: 'ae', name: 'UAE' },
        { code: 'sg', name: 'Singapore' },
        { code: 'nz', name: 'New Zealand' },
        { code: 'ie', name: 'Ireland' },
        { code: 'it', name: 'Italy' },
        { code: 'es', name: 'Spain' },
        { code: 'kr', name: 'South Korea' }
    ];

    return (
        <section className="flag-marquee-section">
            <div className="flag-marquee">
                <div className="marquee-content">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="marquee-track">
                            {flags.map((flag, idx) => (
                                <div key={idx} className="flag-item">
                                    <img
                                        src={`https://flagcdn.com/w80/${flag.code}.png`}
                                        alt={flag.name}
                                        className="country-flag"
                                    />
                                    <span className="country-name">{flag.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlagMarquee;
