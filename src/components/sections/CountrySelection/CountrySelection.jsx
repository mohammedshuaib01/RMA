import React from 'react';
import './CountrySelection.css';

const CountrySelection = () => {
    const countries = [
        {
            id: 1,
            name: "United Kingdom",
            flag_image: "https://flagcdn.com/w640/gb.png",
            location_image: "/uk-landmark.png",
            tag: "Popular",
            description: "World-class education and a diverse culture await you in the UK.",
            benefits: ["Post-Study Work Visa", "Top Universities", "Fast-track Visas"]
        },
        {
            id: 2,
            name: "Canada",
            flag_image: "https://flagcdn.com/w640/ca.png",
            location_image: "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/01/05160522/Largest-City-in-Canada-by-Land-Area-List-of-Top-10.png",
            tag: "Trending",
            description: "Exceptional quality of life and vast career opportunities.",
            benefits: ["PR Opportunities", "High Standard of Living", "Easy Integration"]
        },
        {
            id: 3,
            name: "Australia",
            flag_image: "https://flagcdn.com/w640/au.png",
            location_image: "https://www.mathuravrindavantaxiservices.com/blog/wp-content/uploads/2023/10/australia-1621333850705.jpg",
            tag: "High Demand",
            description: "Sun-drenched beaches and a booming economy for professionals.",
            benefits: ["High Salaries", "Dynamic Work Culture", "Great Lifestyle"]
        },
        {
            id: 4,
            name: "Germany",
            flag_image: "https://flagcdn.com/w640/de.png",
            location_image: "https://www.explorica.com/-/media/Images/Tour-Pictures/destinations/gwe.ashx",
            tag: "New",
            description: "Europe's economic powerhouse with world-leading industrial sectors.",
            benefits: ["Strong Economy", "Low Tuition Fees", "Innovation Hub"]
        }
    ];

    return (
        <section className="country-selection">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Explore Your Career Destinations</h2>
                    <p className="section-subtitle">We help you navigate the best global opportunities for your professional growth.</p>
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
                                            <div className="country-btn" aria-label={`View ${country.name}`}>
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
                                            <div className="country-btn" aria-label={`View ${country.name}`}>
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

                <div className="section-footer">
                    <a href="/countries">
                        <button className="btn see-all-btn">
                            See more countries
                            <span className="btn-icon">→</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CountrySelection;
