import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaUserTie, FaComments } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Home = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/yourusername", color: "bg-gray-800 hover:bg-gray-900" },
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/yourprofile", color: "bg-blue-700 hover:bg-blue-800" },
    { icon: <FiTwitter />, url: "https://twitter.com/yourhandle", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: <FiMail />, url: "mailto:your.email@example.com", color: "bg-red-600 hover:bg-red-700" }
  ];

  return (
    <motion.section
      className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-6"
      style={{
        backgroundImage: "url('/images/home-bg-enhanced.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-gray-900/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Floating tech elements */}
      {['</>', '{ }', ';', '=>', 'SQL', 'API', 'Dev', 'IT'].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/10 text-4xl md:text-6xl font-mono pointer-events-none"
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
          {item}
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto py-16">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
              Cyrus Mwangi
            </span>
          </motion.h1>

          <motion.div
            className="inline-block px-4 py-2 bg-blue-600/20 rounded-full mb-6 border border-blue-400/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-blue-300 font-medium">IT Solutions Expert</span>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transforming business operations through <span className="text-blue-300 font-medium">innovative technology solutions</span>, 
            <span className="text-purple-300 font-medium"> precision system implementations</span>, and 
            <span className="text-cyan-300 font-medium"> seamless technical support</span>.
          </motion.p>
        </div>

        {/* Animated CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Link
            to="/projects"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center text-lg font-semibold text-white">
              View My Projects
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.6 }}
            />
          </Link>

          <Link
            to="/contact"
            className="group relative overflow-hidden px-8 py-4 bg-transparent rounded-lg shadow-2xl border-2 border-blue-400 hover:border-blue-300 hover:shadow-blue-500/20 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center text-lg font-semibold text-white">
              Let's Work Together
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.span
              className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.6 }}
            />
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            {
              icon: <FaLaptopCode className="text-4xl mb-4 text-blue-400" />,
              title: "Technical Expertise",
              description: "Specialized in system implementations, database management, and custom IT solutions",
              link: "/about"
            },
            {
              icon: <FaUserTie className="text-4xl mb-4 text-purple-400" />,
              title: "Business Solutions",
              description: "ERP configurations and process optimizations tailored to your business needs",
              link: "/projects"
            },
            {
              icon: <FaComments className="text-4xl mb-4 text-cyan-400" />,
              title: "Client Focused",
              description: "Dedicated to understanding your unique requirements and delivering exceptional support",
              link: "/contact"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-500/10 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">{item.title}</h3>
              <p className="text-blue-100 text-center mb-6">{item.description}</p>
              <Link
                to={item.link}
                className="flex items-center justify-center text-blue-400 hover:text-blue-300 font-medium group"
              >
                Explore more
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full text-white text-xl ${social.color} transition-all shadow-lg hover:shadow-xl`}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;