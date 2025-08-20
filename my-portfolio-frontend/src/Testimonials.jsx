import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaHeart, FaRocket, FaMagic, FaTimes } from 'react-icons/fa';

// Predefined avatars to avoid external API calls
const predefinedAvatars = {
  men: Array.from({ length: 20 }, (_, i) => `https://randomuser.me/api/portraits/men/${i + 1}.jpg`),
  women: Array.from({ length: 20 }, (_, i) => `https://randomuser.me/api/portraits/women/${i + 1}.jpg`)
};

// Sample testimonials for fallback
const sampleTestimonials = [
  {
    _id: 'sample1',
    name: 'Sarah Johnson',
    position: 'CEO at TechSavilions Inc.',
    message: 'Cyrus transformed our legacy HR system with seamless Oracle integration. His technical expertise saved us months of development time.',
    rating: 5,
    avatar: predefinedAvatars.women[10],
    approved: true
  },
  {
    _id: 'sample2',
    name: 'Michael Chen',
    position: 'Lead Developer at FinTech Solutions',
    message: 'Working with Cyrus was a game-changer for our project. His React expertise and attention to detail elevated our application to the next level.',
    rating: 5,
    avatar: predefinedAvatars.men[5],
    approved: true
  }
];

function Testimonials() {
  const [testimonials, setTestimonials] = useState(sampleTestimonials);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Memoize the fetch function
  const fetchTestimonials = useCallback(async () => {
    try {
      // Set a timeout for the API call
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      
      const res = await fetch(`https://portfolio-backend-3zx5.onrender.com/api/testimonials`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!res.ok) throw new Error('Failed to fetch testimonials');
      
      const data = await res.json();
      const approvedTestimonials = data.filter(testimonial => testimonial.approved);
      
      // Use predefined avatars instead of generating random ones
      const testimonialsWithAvatars = approvedTestimonials.map((testimonial, index) => {
        const firstName = testimonial.name.split(' ')[0].toLowerCase();
        const isLikelyFemale = firstName.endsWith('a') || 
                              firstName.endsWith('e') || 
                              firstName.endsWith('i') || 
                              ['mary', 'sarah', 'lisa', 'anna', 'emma'].includes(firstName);
        
        const gender = isLikelyFemale ? 'women' : 'men';
        // Use index to select from predefined avatars (consistent for each testimonial)
        const avatarIndex = index % 20;
        
        return {
          ...testimonial,
          avatar: testimonial.avatar || predefinedAvatars[gender][avatarIndex],
          rating: testimonial.rating || 5
        };
      });

      setTestimonials(testimonialsWithAvatars);
      
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      // Use sample testimonials immediately instead of waiting for the fetch to fail
      setTestimonials(sampleTestimonials);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Show sample testimonials immediately
    setTestimonials(sampleTestimonials);
    setIsLoading(false);
    
    // Then try to fetch real ones in the background
    fetchTestimonials();
  }, [fetchTestimonials]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://portfolio-backend-3zx5.onrender.com/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', position: '', message: '', rating: 5 });
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reduce the number of floating elements
  const floatingElementsCount = 6;

  if (isLoading) {
    return (
      <motion.section className="min-h-screen flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="text-white text-xl animate-pulse">✨ Loading testimonials...</div>
      </motion.section>
    );
  }

  return (
    <>
      {/* Modal Overlay */}
      {showForm && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowForm(false)}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-cyan-400/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-cyan-200 hover:text-white transition-colors z-10"
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="p-8">
              <div className="text-center mb-8">
                <motion.h3 className="text-3xl font-bold text-white mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  Share Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
                </motion.h3>
                <p className="text-blue-200">Your feedback helps me grow and improve</p>
              </div>

              {submitStatus === 'success' && (
                <motion.div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-100 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  ✅ Thank you! Your testimonial is awaiting approval.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-100 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  ❌ Please check your inputs and try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-100 mb-3 font-medium">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-cyan-100 mb-3 font-medium">Your Position</label>
                    <input type="text" name="position" value={formData.position} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="Your role or position" />
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-100 mb-3 font-medium">Your Rating</label>
                  <div className="flex space-x-2 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button type="button" key={star} onClick={() => setFormData({...formData, rating: star})} className="text-2xl transition-transform hover:scale-125 focus:outline-none">
                        <FaStar className={star <= formData.rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-500'} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-100 mb-3 font-medium">Your Testimonial</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-cyan-400/20 rounded-xl text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none" placeholder="Share your experience working with me..." />
                </div>

                <motion.button type="submit" disabled={isSubmitting} className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaRocket className="text-lg" />
                        Launch Your Testimonial
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <motion.section 
        id="testimonials" 
        className="min-h-screen py-20 px-6 relative overflow-hidden" 
        style={{ 
          backgroundImage: "url('/images/testimonials-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Remove fixed attachment for better performance
        }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        
        {/* Dark overlay for better text readability */}
        <motion.div 
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Additional gradient overlay for aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-cyan-900/20" />

        {/* Reduced number of floating elements */}
        {[...Array(floatingElementsCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {[FaHeart, FaRocket, FaMagic, FaStar][i % 4]()}
          </motion.div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div className="inline-block mb-6" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-2xl shadow-cyan-500/25">
                <FaQuoteLeft className="text-4xl text-white" />
              </div>
            </motion.div>
            
            <motion.h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
              Voices of <span className="text-white">Trust</span>
            </motion.h2>
            
            <motion.p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
              Discover what clients and colleagues say about their experience working with me
            </motion.p>

            <motion.button 
              onClick={() => setShowForm(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                ⭐ Share Your Story
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial._id}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 p-8"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
                whileHover={{ y: -12, scale: 1.02 }}
                // Remove rotation on hover for better performance
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className={`text-xl ${i < testimonial.rating ? 'text-yellow-400 drop-shadow-sm' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-cyan-400/40 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Testimonial Message */}
                  <motion.p className="text-blue-50 mb-8 italic text-lg leading-relaxed font-light">
                    "{testimonial.message}"
                  </motion.p>
                  
                  {/* Author Info */}
                  <div className="flex items-center">
                    <motion.img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-cyan-400/50 shadow-lg mr-4 group-hover:border-cyan-400 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      // Remove rotation for better performance
                      loading="lazy" // Add lazy loading for images
                    />
                    <div>
                      <motion.h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                        {testimonial.name}
                      </motion.h4>
                      <motion.p className="text-cyan-200 text-sm font-medium group-hover:text-cyan-100 transition-colors duration-300">
                        {testimonial.position}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div className="text-center text-cyan-300/70 text-sm max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <p className="flex items-center justify-center gap-2">
              <FaHeart className="text-red-400" />
              Every testimonial is manually reviewed to maintain quality and authenticity
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Testimonials;