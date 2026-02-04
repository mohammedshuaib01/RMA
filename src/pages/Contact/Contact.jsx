import React from 'react';
import ContactHero from '../../components/sections/ContactHero/ContactHero';
import ContactForm from '../../components/sections/ContactForm/ContactForm';
import ScrollReveal from '../../components/common/ScrollReveal/ScrollReveal';
import Faq from '../../components/sections/Faq/Faq';
import './Contact.css';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <ContactHero />

            <ScrollReveal>
                <ContactForm />
            </ScrollReveal>

            {/* Adding FAQ as it's common on contact pages to reduce queries */}
            <ScrollReveal>
                <Faq />
            </ScrollReveal>
        </div>
    );
};

export default ContactPage;
