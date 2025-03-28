
import React from 'react';

const Clients = () => {
  // This would normally be images of actual client logos
  const clientLogos = [
    { name: 'Lenovo', path: './lenovo.png' },
    { name: 'PW', path: './pw.jpg' },
    { name: 'Jeera', path: './jeera.png' },
    { name: 'Sundrop', path: './sundrop.png' },
    { name: 'Bisleri', path: './bisleri.png' },
    { name: 'RedBull', path: './redbull.jpg' },
  ];

  return (
    <section className="py-10 px-2 md:px-4 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center mb-4 reveal-on-scroll">
          <p className="font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">Trusted by Industry Leaders</p>
          <h3 className="text-4xl md:text-3xl font-bold text-gray-400">Our Valued Partners</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={client.path} alt={client.name} className="scale-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
