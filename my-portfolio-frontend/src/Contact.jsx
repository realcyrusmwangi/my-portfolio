import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaTiktok } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="text-2xl" />,
      url: 'https://wa.me/+254718473096', // Replace with your actual phone number
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://www.linkedin.com/in/cyrus-mwangi-5b2128141/', // Replace with your profile
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/Cyrusson', // Replace with your username
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="text-2xl" />,
      url: 'https://x.com/realCyrusMwangi', // Replace with your handle
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      name: 'TikTok',
      icon: <FaTiktok className="text-2xl" />,
      url: 'https://www.tiktok.com/@mwangicyrus', // Replace with your username
      color: 'bg-black hover:bg-gray-800'
    }
  ];

  return (
    <motion.section
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/projects-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay */}
      <motion.div 
        className="absolute inset-0 bg-gray-900/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating tech elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-400/20"
          style={{
            fontSize: `${Math.random() * 30 + 20}px`,
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
          {['</>', '{ }', '[]', '()', ';', '=>', '#'][i % 7]}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Let's <span className="text-white">Connect</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Have a project in mind or need IT solutions? Reach out through the form or connect with me directly.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-8">
              <motion.h2 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Send Me a Message
              </motion.h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-green-500/20 text-green-100 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="mb-6 p-4 bg-red-500/20 text-red-100 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <label htmlFor="name" className="block text-blue-100 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  <label htmlFor="email" className="block text-blue-100 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </motion.div>

                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <label htmlFor="message" className="block text-blue-100 mb-2 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                      isSubmitting 
                        ? 'bg-blue-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Social Links & Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8"
              whileHover={{ y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Connect Directly
              </motion.h2>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-xl transition-all ${social.color} text-white`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 mr-4">
                      {social.icon}
                    </div>
                    <span className="font-medium">{social.name}</span>
                    <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8"
              whileHover={{ y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Contact Information
              </motion.h2>
              
              <motion.div 
                className="space-y-4 text-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a href="mailto:your.email@example.com" className="hover:text-blue-300 transition">realcyrusmwangi@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a href="tel:+1234567890" className="hover:text-blue-300 transition">+254 (718) 473-096</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;