import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Enterprise HR & Payroll System Implementation",
    description: "End-to-end implementation of Oracle HRMS for a multinational corporation with 5,000+ employees, including data migration from legacy systems, payroll configuration, and comprehensive user training.",
    tags: ["Oracle HRMS", "Payroll", "Data Migration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    achievements: [
      "Reduced payroll processing time by 65%",
      "Achieved 99.9% accuracy in tax calculations",
      "Integrated with 3 legacy systems",
      "Trained 500+ users across 12 countries"
    ]
  },
  {
    title: "IT Service Management Portal",
    description: "Custom-built IT service desk solution with ticket management, knowledge base, and reporting dashboard. Reduced resolution time by 35% through automated workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    achievements: [
      "Reduced average ticket resolution time from 48hrs to 31hrs",
      "Automated 60% of common service requests",
      "Achieved 98% user satisfaction rating",
      "Integrated with 8 existing enterprise systems"
    ]
  },
  {
    title: "Network Infrastructure Upgrade",
    description: "Designed and implemented secure enterprise network architecture with SD-WAN, firewall clustering, and zero-trust security model for a financial institution.",
    tags: ["Cisco", "Fortinet", "SD-WAN"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1385&q=80",
    link: "#",
    achievements: [
      "Achieved 99.999% network uptime post-implementation",
      "Reduced security incidents by 80%",
      "Cut network latency by 45%",
      "Enabled seamless remote work for 2,000+ employees"
    ]
  },
  {
    title: "Cloud Migration Strategy",
    description: "Led migration of on-premise ERP system to AWS cloud infrastructure, achieving 99.99% uptime and 40% cost reduction through optimized resource allocation.",
    tags: ["AWS", "Terraform", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    link: "#",
    achievements: [
      "Completed migration 3 weeks ahead of schedule",
      "Reduced infrastructure costs by $1.2M annually",
      "Improved system performance by 35%",
      "Implemented automated scaling for peak loads"
    ]
  },
  {
    title: "BI & Analytics Dashboard",
    description: "Developed real-time business intelligence dashboard integrating data from 12+ sources, providing executives with actionable insights through interactive visualizations.",
    tags: ["Power BI", "SQL", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    link: "#",
    achievements: [
      "Reduced report generation time from days to minutes",
      "Enabled data-driven decisions increasing revenue by 15%",
      "Integrated 12 disparate data sources",
      "Trained 200+ executives on dashboard usage"
    ]
  },
  {
    title: "Mobile Workforce App",
    description: "Cross-platform application enabling field technicians to access work orders, submit reports, and collaborate in real-time, increasing productivity by 28%.",
    tags: ["Flutter", "Firebase", "GIS"],
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    achievements: [
      "Increased field technician productivity by 28%",
      "Reduced paperwork by 90%",
      "Enabled real-time GPS tracking of 150+ field staff",
      "Integrated with legacy CRM and ERP systems"
    ]
  }
];

const ProjectModal = ({ project, onClose, origin }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Overlay with subtle blur */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      
      {/* Modal content */}
      <motion.div
        className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
        style={{ originX: 0.5, originY: 0.5 }}
        initial={{ 
          scale: 0.95,
          opacity: 0,
          x: origin.x - window.innerWidth/2,
          y: origin.y - window.innerHeight/2
        }}
        animate={{ 
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0
        }}
        exit={{ 
          scale: 0.95,
          opacity: 0,
          x: origin.x - window.innerWidth/2,
          y: origin.y - window.innerHeight/2
        }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 300,
          bounce: 0.2
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-700/80 hover:bg-gray-600 text-white/80 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col lg:flex-row h-full">
          {/* Project Image */}
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Project Details */}
          <div className="lg:w-1/2 p-6 overflow-y-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Project Description</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-900/40 text-blue-200 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Key Achievements</h3>
                <ul className="space-y-2 text-gray-300">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors"
              >
                Request Similar Project
              </Link>
              <button className="px-6 py-2 border border-blue-400 text-blue-300 hover:bg-gray-700/50 rounded-lg transition-colors">
                View Technical Details
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [clickOrigin, setClickOrigin] = useState({ x: 0, y: 0 });

  const handleProjectClick = (project, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickOrigin({
      x: rect.left + rect.width/2,
      y: rect.top + rect.height/2
    });
    setSelectedProject(project);
  };

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-16 px-6 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: "url('/images/projects-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/80"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            My <span className="text-white">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Explore my portfolio of IT solutions that drive business transformation and operational excellence.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-96 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 bg-gradient-to-b from-gray-800/90 to-gray-900/90 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="mt-auto"
                >
                  <button
                    onClick={(e) => handleProjectClick(project, e)}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Ready to start your next project?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
            origin={clickOrigin}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;