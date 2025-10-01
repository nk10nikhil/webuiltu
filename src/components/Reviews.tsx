import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Play,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "WeBuiltU transformed our entire marketing strategy. Their AI-driven approach increased our conversion rates by 340% in just 3 months. The team's expertise and dedication are unmatched.",
      results: "340% increase in conversions",
      industry: "Technology",
      projectType: "Full Marketing Overhaul",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateLab",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with WeBuiltU was a game-changer. Their data-driven strategies and innovative campaigns helped us reach new markets and achieve unprecedented growth.",
      results: "250% ROI improvement",
      industry: "Healthcare",
      projectType: "Brand Expansion",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "EcoStyle",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The creativity and strategic thinking from WeBuiltU exceeded all expectations. They didn't just meet our goals—they redefined what we thought was possible.",
      results: "500% engagement boost",
      industry: "Fashion",
      projectType: "Digital Transformation",
    },
    {
      name: "David Park",
      role: "CMO",
      company: "FinanceForward",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Their attention to detail and results-oriented approach is exceptional. WeBuiltU delivered beyond our expectations and became a true partner in our success.",
      results: "180% lead generation",
      industry: "Finance",
      projectType: "Lead Generation Campaign",
    },
    {
      name: "Lisa Thompson",
      role: "VP Marketing",
      company: "GlobalReach",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "WeBuiltU's innovative approach to digital marketing helped us expand into 5 new markets. Their expertise in international marketing is outstanding.",
      results: "5 new markets entered",
      industry: "E-commerce",
      projectType: "International Expansion",
    },
    {
      name: "James Wilson",
      role: "Brand Manager",
      company: "NextGen Solutions",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The team at WeBuiltU brought fresh perspectives and cutting-edge strategies that revolutionized our brand presence. Truly exceptional work.",
      results: "400% brand awareness",
      industry: "Software",
      projectType: "Brand Development",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "250%", label: "Avg. ROI Increase" },
    { icon: Star, value: "4.9", label: "Client Rating" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={ref}
      className="relative py-10 md:py-16 overflow-hidden bg-black/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-1 h-1 bg-marketing-500/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Quote decorations */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl text-marketing-500"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 70}%`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            "
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-sm">
            Client Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say
            about their success stories with us.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10 hover:border-marketing-500/30 transition-all duration-300"
            >
              {/* Mobile Layout - Icon and value in one horizontal line */}
              <div className="flex md:hidden items-center gap-3 justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-500">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/70 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Original design */}
              <div className="hidden md:block">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-marketing-500 transform rotate-12" />
            </div>

            <div className="relative z-10">
              {/* Current Testimonial */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-8 items-center"
              >
                {/* Client Info */}
                {/* Client Info */}
                <div className="text-center md:text-left">
                  {/* Mobile Layout - Image and details in one line */}
                  <div className="flex md:hidden items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative flex-shrink-0"
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full border-3 border-marketing-500/30 shadow-lg"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-full flex items-center justify-center">
                        <Play className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>

                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-marketing-400 font-medium text-sm mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-white/60 text-xs mb-2">
                        {testimonials[currentIndex].company}
                      </p>

                      {/* Rating */}
                      <div className="flex gap-1 mb-2">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: 180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                              <Star className="w-3 h-3 fill-marketing-500 text-marketing-500" />
                            </motion.div>
                          )
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-1 text-xs">
                        <div className="bg-marketing-500/20 rounded px-2 py-1">
                          <span className="text-marketing-300">Industry: </span>
                          <span className="text-white">
                            {testimonials[currentIndex].industry}
                          </span>
                        </div>
                        <div className="bg-marketing-500/20 rounded px-2 py-1">
                          <span className="text-marketing-300">Project: </span>
                          <span className="text-white">
                            {testimonials[currentIndex].projectType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Original vertical design */}
                  <div className="hidden md:block">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative inline-block mb-4"
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full mx-auto md:mx-0 border-4 border-marketing-500/30 shadow-lg"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-marketing-400 font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-white/60 text-sm mb-3">
                      {testimonials[currentIndex].company}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <Star className="w-5 h-5 fill-marketing-500 text-marketing-500" />
                          </motion.div>
                        )
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2 text-sm">
                      <div className="bg-marketing-500/20 rounded-lg px-3 py-1">
                        <span className="text-marketing-300">Industry: </span>
                        <span className="text-white">
                          {testimonials[currentIndex].industry}
                        </span>
                      </div>
                      <div className="bg-marketing-500/20 rounded-lg px-3 py-1">
                        <span className="text-marketing-300">Project: </span>
                        <span className="text-white">
                          {testimonials[currentIndex].projectType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <Quote className="w-8 h-8 text-marketing-500 mb-4 opacity-60" />
                    <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-light italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Results Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block bg-gradient-to-r from-marketing-500 to-marketing-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg"
                    >
                      <TrendingUp className="w-4 h-4 inline mr-2" />
                      {testimonials[currentIndex].results}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                {/* Navigation Arrows */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-marketing-500/20 border border-white/20 hover:border-marketing-500/30 flex items-center justify-center transition-all duration-300 group"
                  >
                    <ArrowLeft className="w-5 h-5 text-white/70 group-hover:text-marketing-300" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-marketing-500/20 border border-white/20 hover:border-marketing-500/30 flex items-center justify-center transition-all duration-300 group"
                  >
                    <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-marketing-300" />
                  </motion.button>
                </div>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-marketing-500 w-8"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Auto-play Toggle */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                    isAutoPlaying
                      ? "bg-marketing-500/20 border-marketing-500/30"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <Play
                    className={`w-5 h-5 transition-all duration-300 ${
                      isAutoPlaying ? "text-marketing-300" : "text-white/70"
                    }`}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
