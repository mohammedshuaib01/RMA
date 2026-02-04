import React from 'react';
import ServiceHero from '../../components/sections/ServiceHero/ServiceHero';
import ServicesList from '../../components/sections/ServicesList/ServicesList';
import ScrollReveal from '../../components/common/ScrollReveal/ScrollReveal';
import Faq from '../../components/sections/Faq/Faq';
import './Services.css';

const ServicesPage = () => {
    return (
        <div className="services-page-container">
            <ServiceHero />

            <ScrollReveal>
                <ServicesList />
            </ScrollReveal>

            {/* Reusing FAQ section as it's relevant for services too */}
            <ScrollReveal>
                <Faq />
            </ScrollReveal>
        </div>
    );
};

export default ServicesPage;
