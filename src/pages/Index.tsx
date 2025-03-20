
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Methodology from '../components/Methodology';
import Clients from '../components/Clients';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CaseStudies from '../components/CaseStudies';
import TrendingInsights from '../components/TrendingInsights';
import Technologies from '../components/Technologies';

const Index = () => {
  useEffect(() => {
    // Initialize reveal on scroll elements
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
          el.classList.add('active');
        }
      });
    };
    
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Technologies />
        <Stats />
        <Portfolio />
        <CaseStudies />
        <Methodology />
        <TrendingInsights />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
