import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Target,
  Users,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Globe2,
  Sparkles,
  Calendar,
  Heart,
  Trophy,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const tabs = [
    {
      id: "story",
      label: "Our Story",
      icon: <Star className="w-4 h-4" />,
    },
    {
      id: "mission",
      label: "Mission",
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: "values",
      label: "Values",
      icon: <Award className="w-4 h-4" />,
    },
    {
      id: "team",
      label: "Team",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  const achievements = [
    { number: "150+", label: "Events Organized", growth: "+25%" },
    { number: "98%", label: "Client Satisfaction", growth: "+5%" },
    { number: "50+", label: "Brands Promoted", growth: "+40%" },
    { number: "12", label: "Cities Covered", growth: "+3" },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative Excellence",
      description: "We push boundaries with innovative marketing solutions",
      gradient: "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Reliability",
      description: "Your brand's reputation is our top priority",
      gradient: "linear-gradient(135deg, #16a34a 0%, #059669 100%)",
      bgColor: "rgba(22, 163, 74, 0.1)",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Measurable Impact",
      description: "We deliver quantifiable marketing results",
      gradient: "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our passion and commitment",
      gradient: "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)",
      bgColor: "rgba(220, 38, 38, 0.1)",
    },
  ];

  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=300&h=300&fit=crop&crop=face",
      expertise: "Brand Strategy, Creative Campaigns",
    },
    {
      name: "Rahul Kumar",
      role: "Event Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: "Event Planning, Project Management",
    },
    {
      name: "Anita Singh",
      role: "Social Media Strategist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      expertise: "Digital Marketing, Content Strategy",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Our Journey
            </h3>
            <p
              style={{
                color: "#d97706",
                lineHeight: "1.7",
                fontSize: "16px",
              }}
            >
              Founded in 2020 by a team of marketing enthusiasts and event
              specialists, WeBuilt_U Agency emerged from a simple belief: every
              brand deserves to shine through creative marketing and memorable
              events that leave lasting impressions.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234, 88, 12, 0.2) 0%, rgba(234, 88, 12, 0.1) 100%)",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(234, 88, 12, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#ea580c",
                    marginBottom: "4px",
                  }}
                >
                  2020
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#d97706",
                  }}
                >
                  Agency Founded
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234, 88, 12, 0.2) 0%, rgba(234, 88, 12, 0.1) 100%)",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(234, 88, 12, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#ea580c",
                    marginBottom: "4px",
                  }}
                >
                  2024
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#d97706",
                  }}
                >
                  150+ Events
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Our Mission
            </h3>
            <p
              style={{
                color: "#d97706",
                lineHeight: "1.7",
                fontSize: "16px",
              }}
            >
              To empower brands through exceptional event organization and
              strategic social media promotion, creating meaningful connections
              between businesses and their audiences while driving measurable
              growth and brand recognition.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                "Create memorable brand experiences",
                "Drive engagement through events",
                "Build lasting client relationships",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "rgba(234, 88, 12, 0.1)",
                    border: "1px solid rgba(234, 88, 12, 0.2)",
                  }}
                >
                  <CheckCircle
                    style={{ width: "20px", height: "20px", color: "#ea580c" }}
                  />
                  <span
                    style={{
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Our Values
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    padding: "20px",
                    background: value.bgColor,
                    borderRadius: "12px",
                    border: "1px solid rgba(234, 88, 12, 0.2)",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: value.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      marginBottom: "16px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "white",
                      marginBottom: "8px",
                      fontSize: "16px",
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#d97706",
                      lineHeight: "1.5",
                    }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: "white",
                marginBottom: "8px",
              }}
            >
              Meet Our Team
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    background: "rgba(234, 88, 12, 0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(234, 88, 12, 0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid rgba(234, 88, 12, 0.4)",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        fontWeight: "600",
                        color: "white",
                        marginBottom: "4px",
                      }}
                    >
                      {member.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#ea580c",
                        marginBottom: "4px",
                      }}
                    >
                      {member.role}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#d97706",
                      }}
                    >
                      {member.expertise}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
        background: "#0c0a09",
      }}
    >
      {/* Enhanced Background Elements */}
      <div style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        {/* Animated dots */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "radial-gradient(circle, rgba(234, 88, 12, 0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            opacity: "0.3",
          }}
        />
      </div>

      <motion.div
        style={{
          y,
          opacity,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
        {/* Enhanced Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 16px",
              background: "rgba(234, 88, 12, 0.2)",
              borderRadius: "50px",
              color: "#ea580c",
              fontWeight: "500",
              fontSize: "14px",
              marginBottom: "24px",
              border: "1px solid rgba(234, 88, 12, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Globe2
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
            About WeBuilt_U Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              marginBottom: "24px",
              lineHeight: "1.1",
              color: "white",
            }}
          >
            Building{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brands
            </span>{" "}
            that Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "20px",
              color: "#d97706",
              maxWidth: "768px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            We're not just marketers—we're brand builders, event specialists,
            and digital strategists creating memorable experiences that elevate
            your business to new heights.
          </motion.p>
        </div>

        {/* Enhanced Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left Side - Enhanced Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: "span 5" }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: "24px",
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(234, 88, 12, 0.3) 0%, rgba(220, 38, 38, 0.2) 100%)",
                  border: "1px solid rgba(234, 88, 12, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop"
                  alt="Our team organizing events"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {!isVideoPlaying && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0, 0, 0, 0.4)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsVideoPlaying(true)}
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Play
                        style={{
                          width: "32px",
                          height: "32px",
                          color: "#ea580c",
                          marginLeft: "4px",
                        }}
                      />
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Enhanced Floating Achievement Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  right: "-24px",
                  background: "rgba(12, 10, 9, 0.95)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid rgba(234, 88, 12, 0.3)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Trophy
                      style={{ width: "24px", height: "24px", color: "white" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: "700",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      150+ Events
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#d97706",
                      }}
                    >
                      Successfully Organized
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Right Side - Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: "span 7" }}
          >
            {/* Enhanced Tab Navigation */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              {tabs.map((tab, idx) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                    background:
                      activeTab === idx
                        ? "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)"
                        : "rgba(234, 88, 12, 0.1)",
                    color: activeTab === idx ? "white" : "#d97706",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      activeTab === idx
                        ? "0 8px 25px rgba(0, 0, 0, 0.3)"
                        : "none",
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{ minHeight: "400px" }}>{renderTabContent()}</div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: "96px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              style={{
                textAlign: "center",
                padding: "32px 24px",
                background: "rgba(234, 88, 12, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                border: "1px solid rgba(234, 88, 12, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "8px",
                  background:
                    "linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {achievement.number}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#d97706",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                {achievement.label}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#ea580c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                <TrendingUp style={{ width: "14px", height: "14px" }} />
                {achievement.growth}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: "96px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(234, 88, 12, 0.2) 0%, rgba(220, 38, 38, 0.1) 100%)",
              borderRadius: "24px",
              padding: "48px 32px",
              border: "1px solid rgba(234, 88, 12, 0.3)",
              backdropFilter: "blur(20px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Sparkle effects */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                opacity: "0.7",
              }}
            >
              <Sparkles
                style={{
                  width: "24px",
                  height: "24px",
                  color: "#ea580c",
                }}
              />
            </div>
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "white",
                marginBottom: "16px",
              }}
            >
              Ready to Elevate Your Brand?
            </h3>
            <p
              style={{
                color: "#d97706",
                marginBottom: "32px",
                maxWidth: "600px",
                margin: "0 auto 32px auto",
                fontSize: "18px",
                lineHeight: "1.6",
              }}
            >
              Join 150+ brands that trust us to deliver exceptional events and
              marketing campaigns that drive real engagement. Let's create
              something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
                color: "white",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Start Your Campaign
              <ArrowRight style={{ width: "20px", height: "20px" }} />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
