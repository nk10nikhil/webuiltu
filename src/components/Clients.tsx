
import React from 'react';

const Clients = () => {
  // This would normally be images of actual client logos
  const clientLogos = [
    { name: 'TechVision', initials: 'TV' },
    { name: 'Evolve Fashion', initials: 'EF' },
    { name: 'WellnessPro', initials: 'WP' },
    { name: 'GlobalMedia', initials: 'GM' },
    { name: 'UrbanEats', initials: 'UE' },
    { name: 'FutureFin', initials: 'FF' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10 reveal-on-scroll">
          <p className="text-marketing-700 font-medium mb-2">Trusted by Industry Leaders</p>
          <h3 className="text-2xl md:text-3xl font-bold text-marketing-900">Our Valued Partners</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                <span className="text-2xl font-bold text-marketing-800">{client.initials}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
