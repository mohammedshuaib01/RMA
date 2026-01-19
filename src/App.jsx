import React from 'react';
import Header from './components/common/Header/Header';
import Hero from './components/home/Hero/Hero';
import FlagMarquee from './components/home/FlagMarquee/FlagMarquee';
import About from './components/home/About/About';
import Features from './components/home/Features/Features';
import Testimonials from './components/home/Testimonials/Testimonials';
import Footer from './components/common/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FlagMarquee />
        <About />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;