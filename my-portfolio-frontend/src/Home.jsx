import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, FaLaptopCode, FaUserTie, FaComments, FaRobot 
} from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { 
  SiTypescript, SiReact, SiNodedotjs, SiPython, 
  SiPostgresql, SiGraphql 
} from "react-icons/si";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [aiAssistantHover, setAiAssistantHover] = useState(false);

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/Cyrusson", color: "from-gray-800 to-gray-900" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/cyrus-mwangi-5b2128141/", color: "from-blue-600 to-blue-800" },
    { icon: <FiTwitter />, url: "https://x.com/realCyrusMwangi", color: "from-blue-400 to-blue-600" },
    { icon: <FiMail />, url: "mailto:realcyrusmwangi@gmail.com", color: "from-red-500 to-red-700" }
  ];

  const techStack = [
    { icon: <SiReact className="text-4xl text-cyan-400" />, name: "React", category: "Frontend" },
    { icon: <SiTypescript className="text-4xl text-blue-500" />, name: "TypeScript", category: "Language" },
    { icon: <SiNodedotjs className="text-4xl text-green-500" />, name: "Node.js", category: "Backend" },
    { icon: <SiPython className="text-4xl text-yellow-400" />, name: "Python", category: "Language" },
    { icon: <SiPostgresql className="text-4xl text-blue-300" />, name: "PostgreSQL", category: "Database" },
    { icon: <SiGraphql className="text-4xl text-pink-500" />, name: "GraphQL", category: "API" }
  ];

  const features = [
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Technical Expertise",
      description: "Specialized in system implementations, database management, and custom IT solutions",
      link: "/about",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: <FaUserTie className="text-4xl" />,
      title: "Business Solutions",
      description: "ERP configurations and process optimizations tailored to your business needs",
      link: "/projects",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: <FaComments className="text-4xl" />,
      title: "Client Focused",
      description: "Dedicated to understanding your unique requirements and delivering exceptional support",
      link: "/contact",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <motion.section
      className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center bg-gray-900"
      style={{
        backgroundImage: "url('/images/home-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-blue-900/60 to-indigo-900/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-7xl mx-auto">
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
            className="inline-block px-4 py-2 bg-indigo-600/30 rounded-full mb-6 border border-blue-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-300 font-medium">IT Solutions Architect</span>
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

        {/* Tech Stack Section */}
        <motion.div
          className="flex justify-center gap-8 mb-16 overflow-hidden flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                {tech.icon}
              </div>
              <span className="mt-2 text-blue-200 text-sm font-medium">{tech.name}</span>
              <span className="text-blue-400/80 text-xs">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-20 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            to="/projects"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-2xl hover:shadow-blue-500/30 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center text-lg font-semibold text-white">
              View My Projects
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            to="/contact"
            className="group relative overflow-hidden px-8 py-4 bg-transparent rounded-lg shadow-2xl border-2 border-blue-400 hover:border-blue-300 hover:shadow-blue-500/20 transition-all duration-500"
          >
            <span className="relative z-10 flex items-center text-lg font-semibold text-white">
              Let's Work Together
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl p-8 border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-500`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-30`} />
              <div className="relative z-10">
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-500/10 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100 text-center mb-6">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="flex items-center justify-center text-blue-400 hover:text-blue-300 font-medium group"
                >
                  Explore more
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-16 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-14 h-14 rounded-full text-white text-2xl bg-gradient-to-br ${social.color} transition-all shadow-lg hover:shadow-xl backdrop-blur-sm`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Floating AI Assistant with Tooltip */}
<motion.div
  className="fixed bottom-8 right-8 z-20"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3.0, duration: 0.5 }}
  onHoverStart={() => setAiAssistantHover(true)}
  onHoverEnd={() => setAiAssistantHover(false)}
>
  <Link to="/contact" className="block">
    <div className="relative">
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl shadow-xl cursor-pointer hover:shadow-blue-500/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaRobot />
      </motion.div>
      
      {/* Tooltip */}
      <AnimatePresence>
        {aiAssistantHover && (
          <motion.div
            className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
          >
            Need help? Chat with me!
            <div className="absolute -bottom-1 right-4 w-3 h-3 bg-gray-800 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </Link>
</motion.div>
    </motion.section>
  );
};

export default Home;