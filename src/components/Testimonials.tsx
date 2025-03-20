
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechVision Corp',
      role: 'Marketing Director',
      quote: 'Working with this team transformed our brand presence. Their innovative approach to our product launch exceeded all expectations.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Evolve Fashion',
      role: 'CEO',
      quote: 'The social media campaign they designed for our summer collection generated 3x the engagement we normally see. Absolutely outstanding work!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      rating: 5
    },
    {
      id: 3,
      name: 'Amanda Rodriguez',
      company: 'WellnessPro',
      role: 'Brand Manager',
      quote: 'Their strategic approach to our rebranding was meticulous and thoughtful. We saw a 45% increase in brand recognition within just two months.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-marketing-200 rounded-full text-sm font-medium text-marketing-700 bg-white">
            Client Success Stories
          </div>
          <h2 className="section-heading">
            What Our Clients <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Say About Us
            </span>
          </h2>
          <p className="text-marketing-600 text-lg">
            Don't just take our word for it. Hear directly from the brands we've helped transform
            and elevate in the marketplace.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gray-200 rotate-180" />
                  <p className="text-marketing-700 italic relative z-10 pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-marketing-900">{testimonial.name}</h4>
                    <p className="text-sm text-marketing-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
