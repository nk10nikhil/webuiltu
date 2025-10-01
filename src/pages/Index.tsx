
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Methodology from '../components/Methodology';
import Clients from '../components/Clients';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import CaseStudies from '../components/CaseStudies';
import BackgroundHero from '../components/BackgrounHero';
import LogoScroll from '@/components/LogoScroll';
import Newsletter from '@/components/Newsletter';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Reviews from '@/components/Reviews';

const Index = () => {
  useEffect(() => {
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

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const dockItems = [
  //   {
  //     id: 'home',
  //     icon: <Home className="w-8 h-8 text-white" />,
  //     label: 'Home',
  //     onClick: () => {
  //       window.scrollTo({ top: 0, behavior: 'smooth' });
  //     }
  //   },
  //   {
  //     id: 'services',
  //     icon: <Briefcase className="w-8 h-8 text-white" />,
  //     label: 'Services',
  //     onClick: () => {
  //       const servicesElement = document.querySelector('#services');
  //       servicesElement?.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   },
  //   {
  //     id: 'stats',
  //     icon: <BarChart3 className="w-8 h-8 text-white" />,
  //     label: 'Stats',
  //     onClick: () => {
  //       const statsElement = document.querySelector('#stats');
  //       statsElement?.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   },
  //   {
  //     id: 'clients',
  //     icon: <Users className="w-8 h-8 text-white" />,
  //     label: 'Clients',
  //     onClick: () => {
  //       const clientsElement = document.querySelector('#clients');
  //       clientsElement?.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   },
  //   {
  //     id: 'contact',
  //     icon: <Phone className="w-8 h-8 text-white" />,
  //     label: 'Contact',
  //     onClick: () => {
  //       const footerElement = document.querySelector('#footer');
  //       footerElement?.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // ];

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <BackgroundHero />
        <LogoScroll />
        <CallToAction />
        <div id="services">
          <Services />
        </div>
        <Methodology />
        <div id="stats">
          <Stats />
        </div>
        <About />
        <Reviews />
        <FAQ />
      </main>
      <Newsletter />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
