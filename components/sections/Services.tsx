"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: "💼",
    title: "Wealth Management",
    description: "Comprehensive strategies to grow and protect your wealth for generations to come.",
    features: ["Portfolio Diversification", "Asset Allocation", "Long-term Growth"]
  },
  {
    icon: "🏖️",
    title: "Retirement Planning",
    description: "Plan your retirement with confidence and enjoy the lifestyle you've worked for.",
    features: ["Pension Planning", "Retirement Income", "Lifestyle Planning"]
  },
  {
    icon: "📈",
    title: "Investment Advisory",
    description: "Expert guidance on building a diversified portfolio aligned with your goals.",
    features: ["Market Analysis", "Risk Assessment", "Portfolio Optimization"]
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    description: "Protect your assets and minimize financial risks with strategic planning.",
    features: ["Insurance Planning", "Asset Protection", "Risk Mitigation"]
  },
  {
    icon: "🎓",
    title: "Education Planning",
    description: "Secure your children's educational future with smart savings strategies.",
    features: ["College Savings", "Education Funds", "Scholarship Planning"]
  },
  {
    icon: "💰",
    title: "Tax Planning",
    description: "Optimize your tax strategy to maximize returns and minimize liabilities.",
    features: ["Tax Optimization", "Deduction Planning", "Compliance Support"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-brand-black mb-4"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Tailored financial services designed to meet your unique needs and goals
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-brand-red/20">
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-brand-red to-brand-red/50 pointer-events-none"
                />

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-brand-red/10 to-brand-red/5 rounded-2xl flex items-center justify-center relative group-hover:from-brand-red/20 group-hover:to-brand-red/10 transition-all duration-300"
                  >
                    <span className="text-3xl">{service.icon}</span>

                    {/* Animated ring */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                        opacity: hoveredIndex === index ? [0.5, 0, 0] : 0
                      }}
                      transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                      className="absolute inset-0 rounded-2xl border-2 border-brand-red"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-brand-black mb-3 group-hover:text-brand-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.7,
                        x: hoveredIndex === index ? 0 : -10
                      }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-brand-red/50 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <a
            href="#contact"
            className="inline-block bg-brand-red text-white px-8 py-3.5 rounded-md hover:bg-brand-red/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
