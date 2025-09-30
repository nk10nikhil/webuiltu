
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle, Send } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Strategic brand positioning",
    "Data-driven campaign optimization",
    "Targeted audience engagement",
    "Measurable ROI on marketing spend"
  ];

  return (
    <section id="contact" className="pb-10 py-12 md:py-24 px-0 md:px-12 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }}></div>
      </div>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="white" d="M47.5,-57.2C59.1,-46.7,65,-30.5,69.6,-13.6C74.2,3.4,77.6,21.2,71.3,34.8C65.1,48.4,49.3,57.8,33.1,63.5C16.9,69.1,0.3,71,-15.8,67.8C-31.9,64.7,-47.6,56.5,-59.8,43.1C-72,29.7,-80.8,11.2,-79.8,-6.8C-78.8,-24.9,-68,-42.5,-53.7,-53.2C-39.4,-64,-19.7,-67.9,-1.2,-66.5C17.3,-65.1,34.6,-58.3,47.5,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand's Presence?</h2>
            <p className="text-white/80 text-lg mb-8">
              Join the leading brands who have elevated their marketing with our strategic approach and creative expertise.
            </p>

            <div className="mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center mb-3">
                  <CheckCircle className="h-5 w-5 mr-3 text-marketing-300" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-white text-black hover:bg-white/80 border-black"
                onClick={() => window.open('https://forms.gle/5VjtQjPcMxZrtQM18', '_blank')}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/80"
                onClick={() => {
                  const section = document.getElementById('case-studies-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Portfolio
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 reveal-on-scroll" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Let's Start
                Creating Together</h3>
              <p className="mb-6 text-white/80">
                Ready to elevate your brand? Contact us today to discuss how we can help bring your vision to life.
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/60 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/60 text-white"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Tell us about your proposal..."
                    className="w-full h-24 px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/60 text-white"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-marketing inline-flex items-center justify-center w-full md:w-auto"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
