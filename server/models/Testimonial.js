import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false, // New field: false by default, needs admin approval
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Testimonial', TestimonialSchema);