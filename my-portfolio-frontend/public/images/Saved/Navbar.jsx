import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, FaUserTie, FaTools, FaComments, 
  FaHandshake, FaCode, FaSmile, FaEnvelope,
  FaGithub, FaLinkedin, FaTwitter 
} from "react-icons/fa";

const LINKS = [
  { to: "/", label: "Home", icon: <FaHome className="mr-2" /> },
  { to: "/about", label: "About", icon: <FaUserTie className="mr-2" /> },
  { to: "/skills", label: "Skills", icon: <FaTools className="mr-2" /> },
  { to: "/testimonials", label: "Testimonials", icon: <FaComments className="mr-2" /> },
  { to: "/services", label: "Services", icon: <FaHandshake className="mr-2" /> },
  { to: "/projects", label: "Projects", icon: <FaCode className="mr-2" /> },
  { to: "/funfacts", label: "FunFacts", icon: <FaSmile className="mr-2" /> },
  { to: "/contact", label: "Contact", icon: <FaEnvelope className="mr-2" /> },
];

const SOCIAL_LINKS = [
  { icon: <FaGithub />, url: "https://github.com/Cyrusson", name: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/cyrus-mwangi-5b2128141/", name: "LinkedIn" },
  { icon: <FaTwitter />, url: "https://x.com/realCyrusMwangi", name: "Twitter" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? "bg-gradient-to-r from-indigo-900/95 to-blue-900/95 backdrop-blur-md shadow-lg" 
          : "bg-gradient-to-r from-indigo-800/90 to-blue-800/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Left aligned with more space */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="min-w-[180px]"
          >
            <NavLink 
              to="/" 
              className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors"
            >
              <span className="bg-white text-indigo-700 px-2 py-1 rounded-md font-bold mr-2">
                CM
              </span>
              <span className="hidden sm:inline">Cyrus Mwangi</span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation - Properly spaced */}
          <div className="hidden lg:flex flex-1 justify-between ml-8">
            <div className="flex items-center space-x-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => `
                    relative px-3 py-2 text-base font-medium transition-all duration-200
                    ${
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-indigo-200 hover:text-white hover:bg-indigo-700/30 rounded-lg"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center">
                        {link.icon}
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-white rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Social Links - Right aligned with proper spacing */}
            <div className="flex items-center space-x-3 ml-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-200 hover:text-white hover:bg-indigo-700/30 p-2 rounded-full transition-colors"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-gradient-to-b from-indigo-900 to-blue-900 backdrop-blur-md mt-2 rounded-lg"
            >
              <div className="px-4 py-3 space-y-2">
                {LINKS.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) => `
                        flex items-center px-4 py-2.5 text-base font-medium rounded-md
                        ${
                          isActive 
                            ? "bg-white/10 text-white border-l-4 border-white" 
                            : "text-indigo-200 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {link.icon}
                      <span className="ml-3">{link.label}</span>
                    </NavLink>
                  </motion.div>
                ))}

                <div className="flex justify-center space-x-6 pt-4 border-t border-indigo-700 mt-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-200 hover:text-white hover:bg-white/10 p-2 rounded-full text-xl"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}