import React from "react";
import {
  Calendar,
  Share2,
  Award,
  Target,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Calendar,
      title: "Event Organization",
      description:
        "We plan and execute memorable corporate events, product launches, and experiential marketing campaigns.",
      features: [
        "Corporate Events",
        "Product Launches",
        "Experiential Marketing",
        "Event Management",
      ],
      bgImage: "/service1.jpg",
      link: "/services/event-organization",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Strategic planning and execution of social media campaigns to increase brand awareness and engagement.",
      features: [
        "Content Strategy",
        "Social Media Campaigns",
        "Community Management",
        "Brand Awareness",
      ],
      bgImage: "/service2.jpg",
      link: "/services/social-media-management",
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to reach your target audience and achieve measurable results.",
      features: [
        "SEO Optimization",
        "PPC Campaigns",
        "Email Marketing",
        "Conversion Optimization",
      ],
      bgImage: "/service3.jpg",
      link: "/services/digital-marketing",
    },
    {
      icon: Award,
      title: "Brand Development",
      description:
        "Creating distinctive and consistent brand identities that resonate with your target audience.",
      features: [
        "Brand Identity",
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
      ],
      bgImage: "/service4.jpg",
      link: "/services/brand-development",
    },
    {
      icon: Users,
      title: "Influencer Partnerships",
      description:
        "Connect with relevant influencers to amplify your brand message and reach new audiences.",
      features: [
        "Influencer Outreach",
        "Partnership Management",
        "Campaign Coordination",
        "Performance Tracking",
      ],
      bgImage: "/service5.jpg",
      link: "/services/influencer-partnerships",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description:
        "Detailed performance metrics and insights to measure campaign success and guide future strategies.",
      features: [
        "Performance Analytics",
        "ROI Analysis",
        "Data Insights",
        "Strategic Reporting",
      ],
      bgImage: "/service6.jpg",
      link: "/services/analytics-reporting",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleServiceClick = (link) => {
    navigate(link);
  };

  return (
    <section
      id="services"
      className="py-10 md:py-20 px-0 md:px-12 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-marketing-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-marketing-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-3 py-1 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-lg">
            Our Services
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Digital Experiences
            </span>
          </h2>
          <p className="text-white/80 text-lg md:py-6">
            We offer comprehensive marketing solutions From branding to stunning
            designs, we deliver end-to-end solutions that drive measurable
            results for your business.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div
                className="h-full relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-marketing-500/20"
                onClick={() => handleServiceClick(service.link)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                  }}
                ></div>

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="p-8 relative z-10">
                  {/* Icon and Title - Responsive Layout */}
                  <div className="mb-6 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-marketing-600 to-marketing-800 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-marketing-500/30 transition-all duration-300">
                        <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Title - Only visible on mobile in the flex layout */}
                    <h3 className="text-lg md:hidden font-semibold group-hover:text-marketing-400 transition-colors text-white flex-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Title - Desktop layout */}
                  <h3 className="hidden md:block text-xl font-semibold mb-3 group-hover:text-marketing-400 transition-colors text-white">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-white/60"
                      >
                        <div className="w-1.5 h-1.5 bg-marketing-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="flex items-center text-marketing-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
