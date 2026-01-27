import React from 'react';
import Header from './components/common/Header/Header';
// import Hero from './components/home/Hero/Hero';
import HeroNew from './components/home/HeroNew/HeroNew';
import FlagMarquee from './components/home/FlagMarquee/FlagMarquee';
import About from './components/home/About/About';
import CountrySelection from './components/home/CountrySelection/CountrySelection';
import IndustriesSection from './components/home/IndustriesSection/IndustriesSection';
import ProcessSection from './components/home/ProcessSection/ProcessSection';
import Features from './components/home/Features/Features';
import Testimonials from './components/home/Testimonials/Testimonials';
import AlumniSection from './components/home/AlumniSection/AlumniSection';
import Faq from './components/home/Faq/Faq';  
import Footer from './components/common/Footer/Footer';
import WhatsApp  from './components/common/WhatsApp/WhatsApp';
import './App.css';

function App() {
  return (
    <div className="app">   
      <Header />
      <main>
        {/* <Hero /> */}
        <HeroNew />

        <FlagMarquee />
        <About />
        <CountrySelection />
        <IndustriesSection />
        <ProcessSection />
        <Features />
        <Testimonials />
        <AlumniSection />
        <Faq />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default App;