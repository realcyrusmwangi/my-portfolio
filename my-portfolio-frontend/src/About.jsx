import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDatabase, FaServer, FaCode, FaCloud, FaUserTie, FaChartLine } from "react-icons/fa";
import profilePic from "./assets/cyrus.jpg";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const expertiseAreas = [
    {
      icon: <FaDatabase className="text-3xl text-blue-400" />,
      title: "Database Management",
      description: "Oracle, MySQL, and MSSQL database design, optimization, and migration"
    },
    {
      icon: <FaServer className="text-3xl text-purple-400" />,
      title: "System Implementation",
      description: "End-to-end ERP and business system deployments"
    },
    {
      icon: <FaCode className="text-3xl text-green-400" />,
      title: "Custom Development",
      description: "PHP, JavaScript, and low-code solution development"
    },
    {
      icon: <FaCloud className="text-3xl text-cyan-400" />,
      title: "Cloud Solutions",
      description: "Hybrid cloud infrastructure and service integrations"
    }
  ];

  const timeline = [
    {
      year: "2021-Present",
      role: "Senior IT Solutions Specialist",
      company: "Tech Innovations Ltd",
      description: "Leading enterprise system implementations and managing technical teams"
    },
    {
      year: "2018-2021",
      role: "Systems Administrator",
      company: "Global Business Solutions",
      description: "Managed network infrastructure and ERP system upgrades"
    },
    {
      year: "2016-2018",
      role: "IT Support Engineer",
      company: "Digital Frontiers Inc",
      description: "Provided technical support and system maintenance"
    }
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen py-24"
      style={{
        backgroundImage: "url('/images/about-bg-enhanced.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-purple-900/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating tech elements */}
      {[...Array(8)].map((_, i) => (
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
          {['</>', '{ }', 'SQL', 'API', 'Dev', 'IT', 'ERP', 'DB'][i]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative group"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src={profilePic}
              alt="Cyrus Mwangi"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/70 shadow-2xl mx-auto transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400/50 transition-all duration-700"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <div className="text-center lg:text-left">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              About <span className="text-blue-300">Me</span>
            </motion.h2>

            <motion.div
              className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-6 border border-blue-400/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-blue-300 font-medium uppercase tracking-wider text-sm">
                IT Specialist | Systems & Network Administration
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl leading-relaxed text-blue-50/95 max-w-3xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I'm an adaptable IT professional with over five years of experience delivering innovative technology solutions. 
              My expertise bridges technical implementation and business objectives, ensuring systems not only function 
              flawlessly but drive tangible organizational value.
            </motion.p>
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            My <span className="text-blue-300">Expertise</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-500/10 rounded-full">
                    {area.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center text-white mb-3">{area.title}</h4>
                <p className="text-blue-100 text-center">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Journey */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Professional <span className="text-blue-300">Journey</span>
          </h3>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-blue-400/30 transform -translate-x-1/2"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 lg:pr-0 lg:pl-8 text-left lg:text-right' : 'pl-8'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + index * 0.2, duration: 0.6 }}
              >
                <div className={`absolute top-0 rounded-full w-6 h-6 bg-blue-500 border-4 border-blue-300 ${index % 2 === 0 ? '-right-3 lg:-left-3' : '-left-3'}`}></div>
                <div className={`p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <div className="text-blue-300 font-medium mb-1">{item.year}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.role}</h4>
                  <div className="text-blue-200 font-medium mb-3">{item.company}</div>
                  <p className="text-blue-100">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to discuss your project?
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105"
            >
              Get In Touch
            </Link>
            <a
              href="/cv/Cyrus_Mwangi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}