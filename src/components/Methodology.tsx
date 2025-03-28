
import React from 'react';
import { MessageSquare, Lightbulb, Target, BarChart3, Rocket } from 'lucide-react';
import { Separator } from './ui/separator';

const Methodology = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: 'Discovery',
      description: 'We begin with a deep dive into your brand, audience, and goals to understand the unique challenges and opportunities.'
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: 'Strategy',
      description: 'Our team crafts a comprehensive marketing strategy tailored to your specific needs and market positioning.'
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: 'Creation',
      description: 'We develop creative assets and campaigns that align with your brand identity and resonate with your target audience.'
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: 'Execution',
      description: 'Our experts deploy campaigns across relevant channels, managing every detail to ensure flawless implementation.'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: 'Analysis',
      description: 'We continuously monitor performance, providing detailed analytics and optimizing for maximum impact.'
    }
  ];

  return (
    <section id="methodology" className="py-10 px-6 md:px-12 bg-black/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}></div>
      </div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-2 px-3 py-1 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-lg">
            Our Methodology
          </div>
          <h2 className="section-heading text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            A Proven Process for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Marketing Success
            </span>
          </h2>
          <p className="text-white/80 text-lg">
            Our systematic approach ensures consistent results and measurable impact
            for all your marketing initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-4xl mx-auto relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal-on-scroll"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-start mb-12 relative">
                <div className="mr-6 relative z-10">
                  <div className="bg-gradient-to-r from-marketing-800 to-marketing-700 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-px h-36 md:h-20 bg-gray-200 -translate-x-1/2"></div>
                  )}
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-marketing-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
