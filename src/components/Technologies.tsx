
import React from 'react';
import { Sparkles, Zap, BarChart3, Layers, Smartphone, MessagesSquare } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Feedback & Surveys",
      description: "Mobile-friendly surveys and feedback forms to gather customer insights and preferences."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "AI-Powered Analytics",
      description: "Predictive analytics and AI-driven insights to optimize your marketing strategies."
    },
    {
      icon: <MessagesSquare className="h-8 w-8 text-white" />,
      title: "Conversational Marketing",
      description: "Intelligent chatbots and personalized messaging for real-time customer engagement."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-white" />,
      title: "Interactive Content",
      description: "Engaging quizzes, polls, and interactive stories that boost audience participation."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Automation Tools",
      description: "Marketing automation platforms that streamline workflows and enhance productivity."
    },
    {
      icon: <Layers className="h-8 w-8 text-white" />,
      title: "CRM Integration",
      description: "Seamless integration with customer relationship management systems for data-driven campaigns."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-marketing-900 via-marketing-800 to-marketing-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-marketing-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-marketing-700 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-white/20 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm bg-white/10">
            Cutting-Edge Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies That Power <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-300 to-white">
              Modern Marketing
            </span>
          </h2>
          <p className="text-white/80 text-lg">
            Our agency leverages advanced technologies to create innovative, impactful, and measurable marketing solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors duration-300 reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-marketing-700 to-marketing-800 p-4 rounded-lg inline-flex mb-6">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
              <p className="text-white/80">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
