import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaServer, FaCloud, FaMobile, FaShieldAlt, FaChartLine, FaCogs } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: <FaCode className="text-4xl mb-4 text-blue-400" />,
      skills: [
        { name: "PHP & MySQL", level: 90 },
        { name: "JavaScript & React", level: 85 },
        { name: "Oracle Reports", level: 80 },
        { name: "Tailwind CSS", level: 75 }
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-4xl mb-4 text-green-400" />,
      skills: [
        { name: "MySQL Administration", level: 85 },
        { name: "Oracle Database", level: 80 },
        { name: "Data Migration", level: 90 },
        { name: "ETL Processes", level: 75 }
      ],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Systems",
      icon: <FaServer className="text-4xl mb-4 text-purple-400" />,
      skills: [
        { name: "System Implementation", level: 95 },
        { name: "ERP Configuration", level: 90 },
        { name: "Technical Support", level: 85 },
        { name: "Server Maintenance", level: 80 }
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Cloud & Automation",
      icon: <FaCloud className="text-4xl mb-4 text-cyan-400" />,
      skills: [
        { name: "Power Automate", level: 85 },
        { name: "Azure Fundamentals", level: 75 },
        { name: "CI/CD Pipelines", level: 70 },
        { name: "Low-Code Solutions", level: 80 }
      ],
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  const certifications = [
    {
      name: "Oracle Certified Professional",
      issuer: "Oracle",
      year: "2022"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      year: "2021"
    },
    {
      name: "ITIL Foundation Certification",
      issuer: "AXELOS",
      year: "2020"
    }
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/skills-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay with gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating tech icons */}
      {['</>', '{ }', ';', '=>', 'SQL', 'API', 'Dev', 'IT'].map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/20 text-4xl md:text-6xl font-mono"
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

      <div className="relative z-10 max-w-7xl mx-auto">
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
            Technical <span className="text-white">Expertise</span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            My diverse skill set combines technical depth with practical implementation experience across multiple IT domains.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex flex-col items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-blue-100 font-medium">{skill.name}</span>
                        <span className="text-blue-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.7 + index * 0.1 + i * 0.05, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <motion.h3
            className="text-3xl font-bold text-center text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
              Certifications
            </span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-900/50 to-blue-700/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/50 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-full">
                    <FaShieldAlt className="text-2xl text-blue-300" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white text-center mb-1">{cert.name}</h4>
                <p className="text-blue-200 text-center mb-1">{cert.issuer}</p>
                <p className="text-blue-300/80 text-sm text-center">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200">
              Additional Competencies
            </span>
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            {[
              "Project Management", "Requirements Analysis", 
              "Technical Documentation", "User Training",
              "Process Optimization", "Cross-team Collaboration",
              "Troubleshooting", "Quality Assurance"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="px-5 py-2 bg-blue-600/20 text-blue-100 rounded-full border border-blue-500/30 hover:bg-blue-600/40 hover:border-blue-400/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;