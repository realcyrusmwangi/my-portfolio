// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import testimonialRoutes from './routes/testimonialRoutes.js';
import contactRoutes from './routes/contact.js'; // keep this as is

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes); // URL will be: /api/contact

// Test route
app.get('/', (req, res) => {
  res.send('✅ Backend server is running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
