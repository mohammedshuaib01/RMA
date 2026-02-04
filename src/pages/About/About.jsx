import About from '../../components/sections/About/About';
import CeoMessage from '../../components/sections/CeoMessage/CeoMessage';
import CoreValues from '../../components/sections/CoreValues/CoreValues';
import ScrollReveal from '../../components/common/ScrollReveal/ScrollReveal';
import './About.css';

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <h1 className="about-hero-title">ABOUT US</h1>
                </div>
            </section>

            <ScrollReveal>
                <About />
            </ScrollReveal>

            <ScrollReveal>
                <CeoMessage />
            </ScrollReveal>

            <ScrollReveal>
                <CoreValues />
            </ScrollReveal>
        </div>

    );
};

export default AboutPage;
