
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import BackgroundHero from './BackgrounHero';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const layers = parallaxRef.current.querySelectorAll('.parallax-layer');
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      layers.forEach((layer: Element, i) => {
        const htmlLayer = layer as HTMLElement;
        const speed = (layers.length - i) * 0.01;
        
        const x = (mouseX * speed) * -1;
        const y = (mouseY * speed) * -1;
        
        htmlLayer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-12 px-6 md:px-12 bg-neutral-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 -z-10"></div>
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px' 
        }}></div>
      </div>
      
      {/* Parallax Elements */}
      <div ref={parallaxRef} className="parallax absolute inset-0 -z-5">
        <div className="parallax-layer">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-100 opacity-40 filter blur-3xl animate-float"></div>
        </div>
        <div className="parallax-layer">
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-purple-100 opacity-30 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="parallax-layer">
          <div className="absolute top-2/3 right-1/3 w-80 h-80 rounded-full bg-yellow-100 opacity-20 filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white bg-opacity-80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Elevate Your Brand
          </div>
          <h1 className="section-heading animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Not Just Marketing<br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              We Create Experiences
            </span>
          </h1>
          <div className="inline-block mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white bg-opacity-80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Where Marketing Meets Influence
          </div>
          <p className="text-marketing-600 text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            A premier marketing agency specializing in event organization 
            and social media promotion to elevate your brand's presence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a href="#services" className="btn-marketing flex items-center">
              Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="px-6 py-3 border border-marketing-200 rounded-md bg-white text-marketing-900 hover:border-marketing-300 transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
        
        <div className="relative flex justify-center reveal-on-scroll" style={{ animationDelay: '0.6s' }}>
          <div className="relative w-full max-w-md animate-float">
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-102 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Marketing team in action" 
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 md:p-6 z-20 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-marketing-600">Successful Events</span>
                <span className="text-3xl font-bold text-marketing-900">20+</span>
              </div>
            </div>
            
            {/* Experience Card */}
            <div className="absolute -top-6 -right-6 glass-card p-4 md:p-6 z-20 animate-fade-in" style={{ animationDelay: '2s' }}>
              <div className="flex flex-col space-y-1">
                <span className="text-sm text-marketing-600">Years Experience</span>
                <span className="text-3xl font-bold text-marketing-900">1+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
