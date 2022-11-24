import './App.css';
import Header from './components/header/Header';
import OurServices from './components/main/OurServices';
import WhyUs from './components/main/WhyUs';
import CTABanner from './components/main/CTABanner';
import Faq from './components/main/Faq';
import Footer from './components/footer/Footer';
import Testimonial from './components/main/Testimonial';
import React, { Component }  from 'react';

function App() {
  return (
    <div>
      <Header />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CTABanner />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
