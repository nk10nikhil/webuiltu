
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
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

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'events', name: 'Events' },
    { id: 'social', name: 'Social Media' },
    { id: 'branding', name: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'GCET Creators Hackathon 2025',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      description: 'A premier technology conference showcasing the latest innovations and hosting industry leaders.'
    },
    {
      id: 2,
      title: 'Luminous Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
      description: 'Complete brand identity development for Luminous, a modern lighting solutions company.'
    },
    {
      id: 3,
      title: 'GSOC Launch',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      description: "Exclusive launch event for a premium fashion brand's summer collection."
    },
    {
      id: 4,
      title: 'Marathon Social Campaign',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Comprehensive social media campaign that increased engagement by 200% for a lifestyle brand.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white">
            Our Portfolio
          </div>
          <h2 className="section-heading">
            Showcasing Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Creative Excellence
            </span>
          </h2>
          <p className="text-marketing-600 text-lg">
            Explore our diverse portfolio of successful projects that demonstrate our expertise
            and commitment to delivering exceptional results.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-marketing-900 text-white'
                : 'bg-white border border-marketing-200 text-marketing-700 hover:bg-marketing-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative rounded-xl overflow-hidden reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block mb-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-marketing-900">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center font-medium text-white hover:text-marketing-300 transition-colors"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
