import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  TrendingUp,
  Heart,
  MessageCircle,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Sparkles,
  Video,
  Camera,
  Share2,
  Target,
  BarChart3,
  ThumbsUp,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Zap,
  Eye,
  Award,
  UserPlus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

// Animated Counter
const AnimatedCounter = ({
  end,
  duration = 2,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// Particles Background
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(251, 146, 60, 0.1)";

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
};

// Hero Section
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-icon", {
        scale: 0,
        rotation: 360,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-marketing-950/50 to-black pt-20"
    >
      <ParticlesBackground />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { Icon: Users, position: "top-20 left-10", delay: 0 },
          { Icon: Heart, position: "top-40 right-20", delay: 0.2 },
          { Icon: Camera, position: "bottom-40 left-20", delay: 0.4 },
          { Icon: Video, position: "bottom-20 right-10", delay: 0.6 },
          { Icon: MessageCircle, position: "top-1/2 left-5", delay: 0.8 },
          { Icon: Share2, position: "top-1/3 right-10", delay: 1 },
        ].map(({ Icon, position, delay }, index) => (
          <motion.div
            key={index}
            className={`hero-icon absolute ${position} text-marketing-400/20`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-marketing-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-marketing-600/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-marketing-500/20 border border-marketing-500/30 rounded-full text-marketing-300 text-sm mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Influencer Marketing Collaboration
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/80">
            Amplify Your Reach
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-marketing-400 via-marketing-500 to-marketing-600">
            Through Influencers
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-3xl mx-auto px-4 text-white/80 font-medium pb-8"
        >
          Connect with influential voices that drive authentic engagement and
          conversions. We create powerful influencer partnerships that deliver
          measurable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Start Campaign
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Case Studies
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            {
              number: 500,
              suffix: "+",
              label: "Influencers Network",
              icon: <Users className="w-5 h-5" />,
            },
            {
              number: 100,
              suffix: "M+",
              label: "Total Reach",
              icon: <Eye className="w-5 h-5" />,
            },
            {
              number: 8,
              suffix: "%",
              label: "Avg Engagement Rate",
              icon: <Heart className="w-5 h-5" />,
            },
            {
              number: 200,
              suffix: "+",
              label: "Campaigns Executed",
              icon: <Star className="w-5 h-5" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-xl flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600 mb-2">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Influencer Discovery",
      description:
        "Find the perfect influencers aligned with your brand values and target audience.",
      features: [
        "Database Access",
        "Audience Analysis",
        "Authenticity Check",
        "Niche Matching",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Campaign Strategy",
      description:
        "Develop comprehensive influencer marketing strategies that drive results.",
      features: [
        "Goal Setting",
        "Content Planning",
        "Budget Allocation",
        "Timeline Management",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Content Collaboration",
      description:
        "Work with influencers to create authentic, engaging content that resonates.",
      features: [
        "Content Briefs",
        "Creative Direction",
        "Quality Control",
        "Brand Guidelines",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description:
        "Track and measure campaign performance with detailed analytics and insights.",
      features: [
        "Real-time Tracking",
        "ROI Analysis",
        "Engagement Metrics",
        "Custom Reports",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Insights",
      description:
        "Deep dive into influencer audiences to ensure perfect brand-audience fit.",
      features: [
        "Demographics",
        "Psychographics",
        "Behavior Analysis",
        "Sentiment Tracking",
      ],
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Long-term Partnerships",
      description:
        "Build lasting relationships with influencers for sustained brand advocacy.",
      features: [
        "Ambassador Programs",
        "Exclusive Deals",
        "Relationship Management",
        "Performance Bonuses",
      ],
      color: "from-rose-500 to-pink-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-black via-marketing-950/30 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
            Influencer Marketing Services
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            End-to-end influencer marketing solutions that drive authentic
            engagement and conversions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-marketing-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-4 h-4 text-marketing-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Platforms Section
const PlatformsSection = () => {
  const platforms = [
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram",
      color: "from-purple-500 via-pink-500 to-orange-500",
      stat: "1B+ Users",
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      name: "YouTube",
      color: "from-red-600 to-red-500",
      stat: "2B+ Users",
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      name: "Facebook",
      color: "from-blue-600 to-blue-500",
      stat: "2.9B+ Users",
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      name: "Twitter/X",
      color: "from-sky-500 to-blue-500",
      stat: "500M+ Users",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-marketing-500/5 via-transparent to-marketing-600/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
            Multi-Platform Reach
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Access influencers across all major social media platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 flex flex-col items-center justify-center text-center group cursor-pointer"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {platform.name}
              </h3>
              <p className="text-marketing-400 font-semibold">
                {platform.stat}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Timeline
const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Campaign Brief",
      description:
        "Define objectives, target audience, budget, and key performance indicators.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Influencer Selection",
      description:
        "Identify and vet influencers that align with your brand and campaign goals.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Content Creation",
      description:
        "Collaborate on authentic, engaging content that resonates with audiences.",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Monitor & Optimize",
      description:
        "Track performance metrics and optimize campaigns for maximum impact.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      timeline.from(".process-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
      });

      steps.forEach((_, index) => {
        timeline.from(
          `.process-step-${index}`,
          {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-black via-marketing-950/30 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
            Our Campaign Process
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            A proven methodology for creating successful influencer marketing
            campaigns.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-marketing-500 to-marketing-600 process-line" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`process-step-${index} flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-xl flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-bold text-marketing-400/30">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-full border-4 border-black z-10 relative" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Campaign Types
const CampaignTypesSection = () => {
  const campaigns = [
    {
      icon: <Video className="w-5 h-5" />,
      title: "Product Reviews",
      description: "Authentic product demonstrations",
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: "Sponsored Posts",
      description: "Branded social media content",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Brand Ambassadors",
      description: "Long-term partnerships",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Takeovers",
      description: "Social media account takeovers",
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      title: "Contests & Giveaways",
      description: "Engagement-driven campaigns",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Story Features",
      description: "Behind-the-scenes content",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
            Campaign Types
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Diverse campaign formats to match your marketing objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-marketing-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-lg flex items-center justify-center mb-4 text-white">
                {campaign.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {campaign.title}
              </h3>
              <p className="text-white/70">{campaign.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Riya Deshmukh",
      position: "Marketing Manager",
      company: "Beauty Brand",
      image: "/review1.jpg",
      rating: 5,
      text: "Our influencer campaign generated 5M impressions and 15% conversion rate. Outstanding results!",
    },
    {
      name: "Aditya Khanna",
      position: "Founder",
      company: "Tech Startup",
      image: "/review2.jpg",
      rating: 5,
      text: "WeBuilt_U connected us with perfect influencers. The ROI exceeded all expectations!",
    },
    {
      name: "Pooja Mehta",
      position: "Brand Director",
      company: "Fashion Label",
      image: "/review3.jpg",
      rating: 5,
      text: "Professional team, authentic partnerships, and incredible engagement. Highly recommend!",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-marketing-950/30 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
            Campaign Success Stories
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Real results from brands that partnered with influencers through our
            platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-marketing-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-marketing-500/30"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-marketing-400 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-marketing-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-marketing-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-marketing-600/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-marketing-500/20 to-marketing-600/10 rounded-3xl p-12 border border-marketing-500/20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Launch Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
              Influencer Campaign?
            </span>
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with influential voices and amplify your brand reach. Start
            creating authentic partnerships today.
          </p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Users className="w-5 h-5" />
              Launch Campaign
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Component
const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PlatformsSection />
      <ProcessSection />
      <CampaignTypesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
