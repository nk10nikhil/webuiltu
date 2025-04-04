
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-marketing-950 text-white pt-8 pb-8 px-0 md:px-12 md:pt-16">
      <div className="container mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Logo Section */}
          <div>
            {/* Company Name */}
            <a
              href="https://webuiltu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 reveal-on-scroll">
              <div className="text-2xl font-bold">
                <span className="pr-1.5 text-white">WeBuilt_U</span>
                <span className="text-marketing-400">Agency</span>
              </div>
            </a>

            {/* Company Description */}
            <p className="text-marketing-400 mb-6 max-w-xs">
              A premier marketing agency specializing in event organization and
              brand promotion across various social media platforms.
            </p>

            {/* Social Icons */}
            <div className="mt-8">
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/webuiltu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-marketing-100 p-3 rounded-full hover:bg-marketing-200 transition-colors reveal-on-scroll"
                  title="Visit our Facebook page">
                  <svg className="h-5 w-5 text-marketing-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://instagram.com/webuiltu" target="_blank"
                  rel="noopener noreferrer"
                  className="bg-marketing-100 p-3 rounded-full hover:bg-marketing-200 transition-colors reveal-on-scroll"
                  title="Visit our Instagram page">
                  <svg className="h-5 w-5 text-marketing-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/webuiltu" target="_blank"
                  rel="noopener noreferrer"
                  className="bg-marketing-100 p-3 rounded-full hover:bg-marketing-200 transition-colors reveal-on-scroll"
                  title="Visit our Twitter page">
                  <svg className="h-5 w-5 text-marketing-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/webuiltu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-marketing-100 p-3 rounded-full hover:bg-marketing-200 transition-colors reveal-on-scroll"
                  title="Visit our LinkedIn page"
                >
                  <svg
                    className="h-5 w-5 text-marketing-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.601v5.591z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Event Organization
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Brand Development
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Influencer Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-marketing-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-marketing-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Greater Noida
              </li>
              <li>
                <a href="tel:+917777048666" className="flex items-center text-marketing-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 6307422563
                </a>
              </li>
              <li>
                <a href="mailto:webuiltu@gmail.com" className="flex items-center text-marketing-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  webuiltu@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-marketing-700 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-marketing-200 text-sm">
            &copy; {new Date().getFullYear()} WeBuilt_U Agency. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-marketing-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-marketing-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-marketing-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="bg-marketing-800 hover:bg-marketing-700 text-white p-3 rounded-full transition-colors mt-0 md:mt-0 focus:outline-none reveal-on-scroll"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="bg-marketing-800 hover:bg-marketing-700 text-white p-3 rounded-full transition-colors focus:outline-none"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
