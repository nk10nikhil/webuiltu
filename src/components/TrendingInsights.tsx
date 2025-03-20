
import React from 'react';
import { TrendingUp, Clock, ArrowRight } from 'lucide-react';

const TrendingInsights = () => {
  const insights = [
    {
      category: "Social Media",
      title: "The Rise of Authentic Content Marketing",
      date: "March 12, 2025",
      excerpt: "How brands are moving away from overly polished content toward more authentic storytelling.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868"
    },
    {
      category: "Branding",
      title: "Purpose-Driven Branding in 2025",
      date: "February 28, 2025",
      excerpt: "Consumers increasingly support brands that align with their personal values and social causes.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd"
    },
    {
      category: "Events",
      title: "Hybrid Events: The Future of Engagement",
      date: "April 15, 2025",
      excerpt: "Combining physical and virtual experiences to create memorable and accessible brand events.",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0 reveal-on-scroll">
            <div className="inline-flex items-center mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white">
              <TrendingUp className="h-4 w-4 mr-2" /> 
              Trending Insights
            </div>
            <h2 className="section-heading mb-4">
              Stay Ahead with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
                Marketing Intelligence
              </span>
            </h2>
            <p className="text-marketing-600 text-lg">
              Explore the latest trends and insights shaping the future of marketing and brand experiences.
            </p>
          </div>
          <div className="reveal-on-scroll" style={{ animationDelay: "0.3s" }}>
            <a href="#" className="inline-flex items-center text-marketing-800 font-medium hover:text-marketing-600 transition-colors">
              View all insights <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-marketing-700 bg-marketing-100 px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                  <div className="flex items-center text-xs text-marketing-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {insight.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-marketing-900">{insight.title}</h3>
                <p className="text-marketing-600 mb-4">{insight.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-marketing-700 font-medium hover:text-marketing-900 transition-colors"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingInsights;
