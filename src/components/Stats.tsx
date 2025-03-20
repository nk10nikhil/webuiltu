
import React from 'react';
import { Award, Users, Calendar, BarChart } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8 text-marketing-800" />,
      value: '20+',
      label: 'Events Organized',
      description: 'Successful events across industries'
    },
    {
      icon: <Users className="h-8 w-8 text-marketing-800" />,
      value: '5K+',
      label: 'Audience Reached',
      description: 'Through strategic campaigns'
    },
    {
      icon: <Award className="h-8 w-8 text-marketing-800" />,
      value: '3+',
      label: 'Industry Awards',
      description: 'For exceptional marketing'
    },
    {
      icon: <BarChart className="h-8 w-8 text-marketing-800" />,
      value: '95%',
      label: 'Client Retention',
      description: 'Long-term partnerships'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative bg-marketing-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-marketing-800/20 p-4 rounded-full inline-flex items-center justify-center mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-medium text-white/90 mb-1">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
