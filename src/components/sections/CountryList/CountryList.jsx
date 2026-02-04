import React from 'react';
import './CountryList.css';

const CountryList = () => {
    const countries = [
        {
            id: 1,
            name: "United Kingdom",
            flag_image: "https://flagcdn.com/w640/gb.png",
            location_image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
            tag: "Popular",
            description: "World-class education and a diverse culture await you in the UK.",
            benefits: ["Post-Study Work Visa", "Top Universities", "Fast-track Visas"]
        },
        {
            id: 2,
            name: "Canada",
            flag_image: "https://flagcdn.com/w640/ca.png",
            location_image: "https://images.unsplash.com/photo-1503614472-8c97d4d18a61?q=80&w=2080&auto=format&fit=crop",
            tag: "Trending",
            description: "Exceptional quality of life and vast career opportunities.",
            benefits: ["PR Opportunities", "High Standard of Living", "Easy Integration"]
        },
        {
            id: 3,
            name: "Australia",
            flag_image: "https://flagcdn.com/w640/au.png",
            location_image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2060&auto=format&fit=crop",
            tag: "High Demand",
            description: "Sun-drenched beaches and a booming economy for professionals.",
            benefits: ["High Salaries", "Dynamic Work Culture", "Great Lifestyle"]
        },
        {
            id: 4,
            name: "Germany",
            flag_image: "https://flagcdn.com/w640/de.png",
            location_image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
            tag: "Economic Hub",
            description: "Europe's economic powerhouse with world-leading industrial sectors.",
            benefits: ["Strong Economy", "Innovation Hub", "Work-Life Balance"]
        },
        {
            id: 5,
            name: "USA",
            flag_image: "https://flagcdn.com/w640/us.png",
            location_image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2070&auto=format&fit=crop",
            tag: "Global Tech",
            description: "The land of opportunity with unparalleled career growth in technology.",
            benefits: ["STEM Opportunities", "High Earning Potential", "Diverse Culture"]
        },
        {
            id: 6,
            name: "Ireland",
            flag_image: "https://flagcdn.com/w640/ie.png",
            location_image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1974&auto=format&fit=crop",
            tag: "EU Tech Hub",
            description: "A friendly English-speaking gateway to Europe's tech industry.",
            benefits: ["Tech Giants HQ", "Quality Education", "Rich Heritage"]
        },
        {
            id: 7,
            name: "New Zealand",
            flag_image: "https://flagcdn.com/w640/nz.png",
            location_image: "https://images.unsplash.com/photo-1469521669194-b78be5538f5d?q=80&w=2070&auto=format&fit=crop",
            tag: "Work-Life",
            description: "Stunning landscapes paired with a stress-free and supportive work culture.",
            benefits: ["Clean Environment", "Safe & Friendly", "Skilled Migration"]
        }
    ];

    return (
        <section className="country-list-section">
            <div className="container">
                <div className="section-header">
                    <span className="sub-heading">OUR DESTINATIONS</span>
                    <h2 className="section-title">Global Career Partnerships</h2>
                    <p className="section-subtitle">We have established strong ties with organizations across these premier nations to facilitate your career growth.</p>
                </div>

                <div className="country-grid">
                    {countries.map((country) => (
                        <div key={country.id} className="flip-card">
                            <div className='flip-card-inner'>
                                {/* front side card */}
                                <div className='country-card-front'>
                                    <div className="card-image-wrapper">
                                        <img src={country.flag_image} alt={country.name} className="country-image" />
                                        {country.tag && <span className="country-tag">{country.tag}</span>}
                                    </div>
                                    <div className="card-content">
                                        <div className="card-top">
                                            <h3 className="country-name">{country.name}</h3>
                                            <div className="country-btn">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="country-desc">{country.description}</p>
                                        <ul className="country-benefits">
                                            {country.benefits.map((benefit, idx) => (
                                                <li key={idx}>
                                                    <span className="bullet"></span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Back side card */}
                                <div className="country-card-back">
                                    <div className="card-image-wrapper">
                                        <img src={country.location_image} alt={country.name} className="country-image" />
                                        {country.tag && <span className="country-tag">{country.tag}</span>}
                                    </div>
                                    <div className="card-content">
                                        <div className="card-top">
                                            <h3 className="country-name">{country.name}</h3>
                                            <div className="country-btn">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="country-desc">{country.description}</p>
                                        <ul className="country-benefits">
                                            {country.benefits.map((benefit, idx) => (
                                                <li key={idx}>
                                                    <span className="bullet"></span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountryList;
