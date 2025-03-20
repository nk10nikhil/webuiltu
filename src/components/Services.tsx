
import React, { useEffect } from 'react';
import { Calendar, Share2, Award, Target, Users, TrendingUp } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-marketing-800" />,
      title: 'Event Organization',
      description: 'We plan and execute memorable corporate events, product launches, and experiential marketing campaigns.',
      delay: 0.3
    },
    {
      icon: <Share2 className="h-10 w-10 text-marketing-800" />,
      title: 'Social Media Management',
      description: 'Strategic planning and execution of social media campaigns to increase brand awareness and engagement.',
      delay: 0.6
    },
    {
      icon: <Target className="h-10 w-10 text-marketing-800" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to reach your target audience and achieve measurable results.',
      delay: 0.9
    },
    {
      icon: <Award className="h-10 w-10 text-marketing-800" />,
      title: 'Brand Development',
      description: 'Creating distinctive and consistent brand identities that resonate with your target audience.',
      delay: 1.2
    },
    {
      icon: <Users className="h-10 w-10 text-marketing-800" />,
      title: 'Influencer Partnerships',
      description: 'Connect with relevant influencers to amplify your brand message and reach new audiences.',
      delay: 1.5
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-marketing-800" />,
      title: 'Analytics & Reporting',
      description: 'Detailed performance metrics and insights to measure campaign success and guide future strategies.',
      delay: 1.8
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white">
            Our Services
          </div>
          <h2 className="section-heading">
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Impactful Experiences
            </span>
          </h2>
          <p className="text-marketing-600 text-lg">
            We offer comprehensive marketing solutions tailored to elevate your brand's
            presence and engage your target audience effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll border border-gray-100"
              style={{ animationDelay: `${service.delay}s` }}
            >
              <div className="bg-marketing-100 p-4 rounded-lg inline-block mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-marketing-900">{service.title}</h3>
              <p className="text-marketing-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-on-scroll">
          <a href="#contact" className="btn-marketing inline-block">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
