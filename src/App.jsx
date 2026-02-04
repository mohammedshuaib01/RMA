import React from 'react';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import WhatsApp from './components/common/WhatsApp/WhatsApp';
import Home from './pages/Home/Home';
import './App.css';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Countries from './pages/Countries/Countries';
import Contact from './pages/Contact/Contact';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">


        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsApp />



      </div>
    </BrowserRouter>
  );
}

export default App;