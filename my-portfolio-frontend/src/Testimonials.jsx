// src/Testimonials.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    // Sample testimonials (will be mixed with fetched ones)
    {
      _id: 'sample1',
      name: 'Sarah Johnson',
      position: 'CTO at TechSolutions Inc.',
      message: 'Cyrus transformed our legacy HR system with seamless Oracle integration. His technical expertise and attention to detail saved us months of development time and significantly improved our payroll processing.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      approved: true
    },
    {
      _id: 'sample2',
      name: 'Michael Chen',
      position: 'IT Director at Global Enterprises',
      message: 'The system implementation led by Cyrus was flawless. His ability to understand complex business requirements and translate them into technical solutions is exceptional. We continue to rely on his expertise for ongoing support.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      approved: true
    },
    {
      _id: 'sample3',
      name: 'Amina Bello',
      position: 'Operations Manager at Africom',
      message: 'Working with Cyrus on our database migration project was a game-changer. His technical skills combined with clear communication made what could have been a stressful process remarkably smooth and successful.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      approved: true
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Fetch real testimonials from your API
    fetch('http://localhost:5000/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        // Combine with sample testimonials (in a real app, you'd only show approved ones)
        setTestimonials(prev => [...data.filter(t => t.approved), ...prev]);
      })
      .catch(() => {
        console.log("Using sample testimonials only");
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('http://localhost:5000/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', position: '', message: '', rating: 5 });
        // In a real app, you'd wait for admin approval before showing
        // setTestimonials(prev => [data, ...prev]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.section
      id="testimonials"
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimonials-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating quote icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-6xl md:text-8xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 5, 0],
            y: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaQuoteLeft />
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Client <span className="text-white">Testimonials</span>
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Hear what industry professionals say about working with me and the impact of our collaborations.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500 p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`text-xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              
              <FaQuoteLeft className="text-blue-300/30 text-5xl mb-4" />
              
              <motion.p
                className="text-lg text-blue-50 mb-8 italic relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                {testimonial.message}
              </motion.p>
              
              <div className="flex items-center">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-400/50 mr-4"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                />
                <div>
                  <motion.h4
                    className="text-xl font-semibold text-white"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p
                    className="text-blue-200"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  >
                    {testimonial.position}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <div className="p-8">
            <motion.h3
              className="text-3xl font-bold text-center text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-200">
                Share Your Experience
              </span>
            </motion.h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                className="mb-6 p-4 bg-green-500/20 text-green-100 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Thank you! Your testimonial has been submitted for review.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="mb-6 p-4 bg-red-500/20 text-red-100 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                There was an error submitting your testimonial. Please try again.
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
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
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <label htmlFor="position" className="block text-blue-100 mb-2 font-medium">
                  Your Position
                </label>
                <input
                  id="position"
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </motion.div>

              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <label htmlFor="rating" className="block text-blue-100 mb-2 font-medium">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="text-2xl focus:outline-none"
                    >
                      <FaStar 
                        className={star <= formData.rating ? 'text-yellow-400' : 'text-gray-500'}
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-blue-100 mb-2 font-medium">
                  Your Testimonial
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
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Testimonial'
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;