import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Lightbulb,
  Shield,
  Clock,
  Users,
  Zap,
} from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      color: "from-marketing-500 to-marketing-600",
      questions: [
        {
          question: "What types of AI solutions do you develop?",
          answer:
            "We specialize in a wide range of AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, chatbots, automation systems, and custom AI applications tailored to your specific business needs.",
        },
        {
          question: "How long does a typical AI project take?",
          answer:
            "Project timelines vary based on complexity and scope. Simple automation projects may take 2-4 weeks, while complex AI systems can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer:
            "Yes! We work with startups, SMEs, and enterprise clients. Our solutions are scalable and can be tailored to fit any business size and budget. We believe every company should have access to cutting-edge AI technology.",
        },
      ],
    },
    {
      category: "Technology",
      icon: Lightbulb,
      color: "from-marketing-600 to-marketing-700",
      questions: [
        {
          question: "What technologies and frameworks do you use?",
          answer:
            "We use cutting-edge technologies including TensorFlow, PyTorch, OpenAI APIs, Google Cloud AI, AWS Machine Learning, Python, JavaScript, React, Node.js, and many other modern frameworks depending on project requirements.",
        },
        {
          question: "Can you integrate AI into our existing systems?",
          answer:
            "Absolutely! We specialize in seamless integration with existing systems. Whether you use CRM software, databases, web applications, or legacy systems, we can create APIs and integrations that work harmoniously with your current infrastructure.",
        },
        {
          question: "Do you provide cloud deployment and hosting?",
          answer:
            "Yes, we offer complete cloud deployment services on AWS, Google Cloud, Azure, and other platforms. We handle scaling, security, monitoring, and maintenance to ensure your AI solutions run smoothly 24/7.",
        },
      ],
    },
    {
      category: "Security",
      icon: Shield,
      color: "from-marketing-700 to-marketing-800",
      questions: [
        {
          question: "How do you ensure data security and privacy?",
          answer:
            "Data security is our top priority. We implement end-to-end encryption, secure data handling protocols, GDPR compliance, regular security audits, and follow industry best practices. Your data never leaves your control without explicit permission.",
        },
        {
          question: "Are your AI solutions compliant with regulations?",
          answer:
            "Yes, we ensure all our AI solutions comply with relevant regulations including GDPR, CCPA, HIPAA (for healthcare), and industry-specific standards. We also provide documentation and audit trails for compliance reporting.",
        },
      ],
    },
    {
      category: "Support",
      icon: Users,
      color: "from-marketing-800 to-marketing-900",
      questions: [
        {
          question: "What kind of support do you provide after deployment?",
          answer:
            "We offer comprehensive post-deployment support including 24/7 monitoring, regular updates, performance optimization, bug fixes, feature enhancements, and dedicated support channels. Our support packages are flexible and can be customized to your needs.",
        },
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes! We provide comprehensive training programs for your team, including user manuals, video tutorials, live training sessions, and ongoing support. We ensure your team is fully equipped to use and maintain the AI solutions effectively.",
        },
        {
          question: "How do you handle system updates and improvements?",
          answer:
            "We provide regular system updates, performance improvements, and feature enhancements. Our agile approach allows us to quickly adapt to new requirements and implement improvements based on usage data and feedback.",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const allQuestions = faqs.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      category: category.category,
      categoryIcon: category.icon,
      categoryColor: category.color,
      index: categoryIndex * 10 + questionIndex,
    }))
  );

  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden bg-black/20"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-marketing-500/30"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Question mark decorations */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl font-bold text-marketing-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-sm">
            Help & Support
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Get answers to the most common questions about our AI development
            services and solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {faqs.map((category, index) => (
              <motion.div
                key={category.category}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 hover:border-marketing-500/30 transition-all duration-300 group"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                  {category.category}
                </span>
                <div className="text-xs text-marketing-400 bg-marketing-500/20 px-2 py-1 rounded-full">
                  {category.questions.length}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {allQuestions.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:from-white/10 hover:to-white/15 hover:border-marketing-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <motion.button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left p-6 lg:p-8 flex items-center justify-between"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.categoryColor} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        <faq.categoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-marketing-400 font-semibold uppercase tracking-wider">
                            {faq.category}
                          </span>
                          <div className="w-1 h-1 bg-marketing-500 rounded-full"></div>
                          <span className="text-xs text-white/60">
                            FAQ #{index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-marketing-300 transition-colors duration-300 leading-tight">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 ml-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-marketing-500/20 flex items-center justify-center group-hover:bg-marketing-500/30 transition-colors">
                        <ChevronDown className="w-5 h-5 text-marketing-400 group-hover:text-marketing-300 transition-colors" />
                      </div>
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                          <div className="border-t border-white/10 pt-6 lg:pt-8">
                            <div className="flex items-start space-x-4">
                              <div className="w-1 h-full bg-gradient-to-b from-marketing-500 to-marketing-600 rounded-full flex-shrink-0 mt-1"></div>
                              <p className="text-white/80 leading-relaxed text-base lg:text-lg font-light">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-marketing-500/10 to-marketing-600/10 rounded-2xl border border-marketing-500/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help
              you with any questions about our AI solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
