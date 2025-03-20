
import React, { useState } from 'react';
import { ChevronRight, Award, BarChart3, Users, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  
  const caseStudies = [
    {
      title: "GCET Creators Hackathon",
      category: "Event Management",
      metrics: [
        { icon: <Users className="h-5 w-5" />, label: "Attendance", value: "500+" },
        { icon: <BarChart3 className="h-5 w-5" />, label: "Engagement", value: "92%" },
        { icon: <Globe className="h-5 w-5" />, label: "Reach", value: "50 Colleges" },
      ],
      description: "Organized a 24-hour hackathon that brought together 500+ students from 50 colleges to collaborate on innovative solutions.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    },
    {
      title: "Marathon Sponsorship",
      category: "Brand Transformation",
      metrics: [
        { icon: <BarChart3 className="h-5 w-5" />, label: "Awareness", value: "+185%" },
        { icon: <Users className="h-5 w-5" />, label: "New Customers", value: "2,000+" },
        { icon: <Award className="h-5 w-5" />, label: "Industry Awards", value: "3" },
      ],
      description: "Sponsored a marathon event that led to a 185% increase in brand awareness and 2,000+ new customers within a month.",
      image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Lifestyle App Launch",
      category: "Digital Campaign",
      metrics: [
        { icon: <Users className="h-5 w-5" />, label: "Downloads", value: "3K+" },
        { icon: <BarChart3 className="h-5 w-5" />, label: "Conversion", value: "32%" },
        { icon: <Globe className="h-5 w-5" />, label: "Social Impressions", value: "2L" },
      ],
      description: "Executed a multi-channel digital campaign that propelled a startup app to the top 10 in its category within two weeks of launch.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-marketing-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white">
            Success Stories
          </div>
          <h2 className="section-heading">
            Transformative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Case Studies
            </span>
          </h2>
          <p className="text-marketing-600 text-lg">
            Explore how our strategic approach has delivered measurable results
            and transformed brands across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Case Study Selector */}
          <div className="md:col-span-5 lg:col-span-4 reveal-on-scroll">
            <div className="bg-white rounded-xl shadow-sm p-2">
              {caseStudies.map((caseStudy, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={cn(
                    "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center justify-between",
                    activeCase === index
                      ? "bg-marketing-100 text-marketing-900"
                      : "hover:bg-gray-50"
                  )}
                >
                  <div>
                    <p className="text-xs font-medium text-marketing-500 mb-1">{caseStudy.category}</p>
                    <h3 className="font-bold">{caseStudy.title}</h3>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 transition-transform",
                      activeCase === index ? "text-marketing-700 rotate-90" : "text-gray-400"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Detail */}
          <div className="md:col-span-7 lg:col-span-8 reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={caseStudies[activeCase].image}
                  alt={caseStudies[activeCase].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-6 mb-4">
                  {caseStudies[activeCase].metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="mr-3 bg-marketing-100 p-2 rounded-full text-marketing-700">
                        {metric.icon}
                      </div>
                      <div>
                        <p className="text-xs text-marketing-500">{metric.label}</p>
                        <p className="font-bold text-marketing-900">{metric.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-marketing-600">{caseStudies[activeCase].description}</p>
                <div className="mt-6">
                  <a href="#" className="text-marketing-700 font-medium inline-flex items-center hover:text-marketing-900 transition-colors">
                    Read full case study <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
