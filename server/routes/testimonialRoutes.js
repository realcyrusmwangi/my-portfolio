import express from 'express';
import Testimonial from '../models/Testimonial.js';

const router = express.Router();

// ✅ GET only APPROVED testimonials (for public display)
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true }); // Only approved
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST a new testimonial (auto-sets approved: false)
router.post('/', async (req, res) => {
  const { name, position, message } = req.body;

  const newTestimonial = new Testimonial({
    name,
    position,
    message,
    approved: false // Default, requires admin approval
  });

  try {
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json({ 
      message: 'Testimonial submitted for approval!',
      data: savedTestimonial 
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔧 ADD THIS: Admin approval endpoint (basic version)
router.patch('/:id/approve', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true } // Return updated document
    );
    
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    
    res.json({ message: 'Testimonial approved!', data: testimonial });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;