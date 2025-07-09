import express from 'express';
import Testimonial from '../models/Testimonial.js';

const router = express.Router();

// ✅ GET all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST a new testimonial
router.post('/', async (req, res) => {
  const { name, position, message } = req.body;

  const newTestimonial = new Testimonial({
    name,
    position,
    message,
  });

  try {
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
