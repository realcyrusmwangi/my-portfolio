import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaCloud, FaCode, FaShieldAlt, FaMobile, FaChartLine } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Enterprise System Implementation",
      description: "End-to-end deployment of ERP, CRM, and business management systems tailored to your organizational needs.",
      icon: <FaServer className="text-5xl text-blue-400" />,
      features: ["Requirement analysis", "Custom configuration", "Data migration", "User training"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Database Solutions",
      description: "Design, optimization, and management of Oracle, MySQL, and MSSQL databases for peak performance.",
      icon: <FaDatabase className="text-5xl text-green-400" />,
      features: ["Performance tuning", "Backup strategies", "Security hardening", "Cloud integration"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Cloud Infrastructure",
      description: "Hybrid cloud solutions with AWS, Azure, and private cloud deployments for scalable operations.",
      icon: <FaCloud className="text-5xl text-purple-400" />,
      features: ["Architecture design", "Cost optimization", "Disaster recovery", "DevOps automation"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Custom Software Development",
      description: "Bespoke applications built with PHP, JavaScript, and low-code platforms to solve unique business challenges.",
      icon: <FaCode className="text-5xl text-amber-400" />,
      features: ["Web applications", "API integrations", "Legacy modernization", "UI/UX focus"],
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments and implementation of enterprise-grade protection measures.",
      icon: <FaShieldAlt className="text-5xl text-red-400" />,
      features: ["Vulnerability scans", "Firewall configuration", "Security training", "Compliance audits"],
      color: "from-red-500 to-red-700"
    },
    {
      title: "Mobile Workforce Enablement",
      description: "Cross-platform applications and remote access solutions for distributed teams.",
      icon: <FaMobile className="text-5xl text-cyan-400" />,
      features: ["Field service apps", "Secure VPN setups", "Device management", "Offline capabilities"],
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <motion.section
      id="services"
      className="min-h-screen py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/services-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-purple-900/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating tech elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/10 text-4xl md:text-6xl font-mono"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {['</>', '{ }', 'SQL', 'API', 'Dev', 'Cloud', 'ERP', 'DB', 'Sec', 'IoT', 'AI', 'DevOps'][i]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Professional <span className="text-white">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Comprehensive IT solutions designed to optimize operations, enhance security, and drive business growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Service header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="p-4 bg-white/10 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center">{service.title}</h3>
                </div>
                
                <p className="text-blue-100 text-center mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-blue-200 font-medium text-center">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-blue-50"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
              Ready to transform your IT infrastructure?
            </span>
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
            </motion.a>
            <motion.a
              href="/projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;