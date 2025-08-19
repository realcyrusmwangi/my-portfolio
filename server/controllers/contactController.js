import Message from '../models/Message.js';

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation (matches your model requirements)
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Save to MongoDB
    const newMessage = await Message.create({ name, email, message });

    // Success response (status 201 for "Created")
    res.status(201).json({ 
      message: 'Message saved successfully!',
      data: { id: newMessage._id } // Optional: Return the DB ID
    });

  } catch (err) {
    console.error('Contact form error:', err);

    // Handle Mongoose validation errors (e.g., invalid email format)
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }

    res.status(500).json({ message: 'Server error' });
  }
};