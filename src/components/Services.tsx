
import React from 'react';
import { Calendar, Share2, Award, Target, Users, TrendingUp } from 'lucide-react';


const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: 'Event Organization',
      description: 'We plan and execute memorable corporate events, product launches, and experiential marketing campaigns.',
      delay: 0.3,
      path: './service1.jpg'
    },
    {
      icon: <Share2 className="h-10 w-10 text-white" />,
      title: 'Social Media Management',
      description: 'Strategic planning and execution of social media campaigns to increase brand awareness and engagement.',
      delay: 0.6,
      path: './service2.jpg'
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to reach your target audience and achieve measurable results.',
      delay: 0.9,
      path: './service3.jpg'
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: 'Brand Development',
      description: 'Creating distinctive and consistent brand identities that resonate with your target audience.',
      delay: 1.2,
      path: './service4.jpg'
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: 'Influencer Partnerships',
      description: 'Connect with relevant influencers to amplify your brand message and reach new audiences.',
      delay: 1.5,
      path: './service5.jpg'
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-white" />,
      title: 'Analytics & Reporting',
      description: 'Detailed performance metrics and insights to measure campaign success and guide future strategies.',
      delay: 1.8,
      path: './service6.jpg'
    }
  ];

  return (
    <section className="py-10 px-6 md:px-12 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-marketing-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-marketing-700 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-lg">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            Transforming Ideas into <br />
            <span className="text-transparent text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Impactful Experiences
            </span>
          </h2>
          <p className="text-white/80 text-lg">
            We offer comprehensive marketing solutions tailored to elevate your brand's
            presence and engage your target audience effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((tech, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300 reveal-on-scroll relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${tech.path})` }}
              ></div>
              <div className="relative z-10">
                <div className='flex gap-5 items-center'>
                  <div className="bg-gradient-to-br from-black to-marketing-800 p-4 rounded-lg inline-flex mb-6">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl text-white/90 font-bold mb-3">{tech.title}</h3>
                </div>

                <p className="text-white/90">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
