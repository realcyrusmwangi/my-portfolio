import React from "react";
import { motion } from "framer-motion";
import { FaLanguage, FaMusic, FaPlane, FaBook, FaUtensils, FaGamepad } from "react-icons/fa";
import { GiRunningShoe, GiBrain } from "react-icons/gi";

const FunFacts = () => {
  const funFacts = [
    {
      category: "Languages",
      icon: <FaLanguage className="text-5xl text-blue-400" />,
      items: [
        { title: "English", level: "Native" },
        { title: "Swahili", level: "Fluent" },
        { title: "Spanish", level: "Intermediate (Learning)", progress: 65 }
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "Hobbies",
      icon: <GiRunningShoe className="text-5xl text-purple-400" />,
      items: [
        { title: "Marathon Running", detail: "Completed 3 full marathons" },
        { title: "Photography", detail: "Landscape & urban photography enthusiast" },
        { title: "Chess", detail: "Competitive player since university" }
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      category: "Interests",
      icon: <GiBrain className="text-5xl text-amber-400" />,
      items: [
        { title: "Neuroscience", detail: "Fascinated by brain-computer interfaces" },
        { title: "FinTech", detail: "Blockchain and payment systems" },
        { title: "Space Tech", detail: "Follow SpaceX and NASA missions" }
      ],
      color: "from-amber-500 to-amber-700"
    },
    {
      category: "Fun Facts",
      icon: <FaGamepad className="text-5xl text-green-400" />,
      items: [
        { title: "Retro Gamer", detail: "Own every Nintendo console since 1990" },
        { title: "Coffee Connoisseur", detail: "Home espresso setup with 12+ brew methods" },
        { title: "Book Worm", detail: "Read 50+ books/year across genres" }
      ],
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <motion.section
      id="funfacts"
      className="min-h-screen py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/funfacts-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-blue-900/50 to-purple-900/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating hobby icons */}
      {[<FaLanguage />, <FaMusic />, <FaPlane />, <FaBook />, <FaUtensils />, <FaGamepad />].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-5xl md:text-7xl"
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
          {Icon}
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Beyond <span className="text-white">Code</span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The passions, quirks, and personal pursuits that shape my worldview and creative process.
          </motion.p>
        </motion.div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {funFacts.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Category header */}
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              
              <div className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="p-4 bg-white/10 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <h4 className="text-blue-300 font-semibold">{item.title}</h4>
                      {item.level && (
                        <div className="flex items-center mt-1">
                          <span className="text-blue-100 text-sm mr-2">{item.level}</span>
                          {item.progress && (
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" 
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      )}
                      {item.detail && (
                        <p className="text-blue-100 text-sm mt-1">{item.detail}</p>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200">
              Life Philosophy
            </span>
          </motion.h3>
          <motion.p
            className="text-lg text-blue-100 text-center italic mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            "Balance disciplined work with passionate play - the best solutions come from well-rounded perspectives."
          </motion.p>
          <div className="flex justify-center">
            <motion.img
              src="/images/hobby-collage.jpg"
              alt="Hobby collage"
              className="rounded-xl shadow-lg w-full max-w-md border-4 border-white/20"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FunFacts;