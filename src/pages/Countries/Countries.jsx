import React from 'react';
import CountryHero from '../../components/sections/CountryHero/CountryHero';
import CountryList from '../../components/sections/CountryList/CountryList';
import ScrollReveal from '../../components/common/ScrollReveal/ScrollReveal';
import IndustriesSection from '../../components/sections/IndustriesSection/IndustriesSection';
import './Countries.css';

const CountriesPage = () => {
    return (
        <div className="countries-page-container">
            <CountryHero />

            <ScrollReveal>
                <CountryList />
            </ScrollReveal>

            {/* Reusing Industries section as it shows where they can work in these countries */}
            <ScrollReveal>
                <IndustriesSection />
            </ScrollReveal>
        </div>
    );
};

export default CountriesPage;
