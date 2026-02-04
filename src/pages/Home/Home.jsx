import React from 'react';
import HeroNew from '../../components/sections/HeroNew/HeroNew';
import FlagMarquee from '../../components/sections/FlagMarquee/FlagMarquee';
import About from '../../components/sections/About/About';
import CountrySelection from '../../components/sections/CountrySelection/CountrySelection';
import IndustriesSection from '../../components/sections/IndustriesSection/IndustriesSection';
import ProcessSection from '../../components/sections/ProcessSection/ProcessSection';
import Features from '../../components/sections/Features/Features';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import AlumniSection from '../../components/sections/AlumniSection/AlumniSection';
import Faq from '../../components/sections/Faq/Faq';
import ScrollReveal from '../../components/common/ScrollReveal/ScrollReveal';

const Home = () => {
    return (
        <>
            <HeroNew />

            <ScrollReveal delay={0.1}>
                <FlagMarquee />
            </ScrollReveal>

            <ScrollReveal>
                <About />
            </ScrollReveal>

            <ScrollReveal>
                <CountrySelection />
            </ScrollReveal>

            <ScrollReveal>
                <IndustriesSection />
            </ScrollReveal>

            <ScrollReveal>
                <ProcessSection />
            </ScrollReveal>

            <ScrollReveal>
                <Features />
            </ScrollReveal>

            <ScrollReveal>
                <Testimonials />
            </ScrollReveal>

            <ScrollReveal>
                <AlumniSection />
            </ScrollReveal>

            <ScrollReveal>
                <Faq />
            </ScrollReveal>
        </>
    );
};

export default Home;
