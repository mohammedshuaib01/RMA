import React from 'react';
import './IndustriesSection.css';
import {
    Layout,
    Compass,
    Home,
    Car,
    Building2,
    Wallet,
    Heart,
    Stethoscope,
    Laptop,
    Music,
    GraduationCap,
    Hotel
} from 'lucide-react';

const industries = [
    { name: "Architecture Agency", icon: <Layout size={20} /> },
    { name: "Tourismagency", icon: <Compass size={20} /> },
    { name: "Interior Design Agency", icon: <Home size={20} /> },
    { name: "Automotive & Mobility", icon: <Car size={20} /> },
    { name: "Construction & Architecture", icon: <Building2 size={20} /> },
    { name: "Financial Services", icon: <Wallet size={20} /> },
    { name: "Beauty & Cosmetics", icon: <Heart size={20} /> },
    { name: "Healthcare & Life Sciences", icon: <Stethoscope size={20} /> },
    { name: "Technology & Software", icon: <Laptop size={20} /> },
    { name: "Media & Entertainment", icon: <Music size={20} /> },
    { name: "Education Consultancy", icon: <GraduationCap size={20} /> },
    { name: "Hospitality", icon: <Hotel size={20} /> }
];

const IndustriesSection = () => {
    return (
        <section className="industries-section">
            <div className="container">
                <div className="industries-header">
                    <span className="sub-title">INDUSTRIES</span>
                    <h2 className="section-title">Industries We Help</h2>
                </div>

                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <div key={index} className="industry-item">
                            <div className="industry-content">
                                <span className="industry-icon">{industry.icon}</span>
                                <span className="industry-name">{industry.name}</span>
                            </div>
                            <div className="hover-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
