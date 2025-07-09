import { useState } from 'react';

function TestimonialForm({ onAdd }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTestimonial = { name, position, message };

    const res = await fetch('http://localhost:5000/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTestimonial),
    });

    const data = await res.json();

    // Clear the form
    setName('');
    setPosition('');
    setMessage('');

    // Notify parent
    if (onAdd) onAdd(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Leave a Testimonial</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        required
      />
      <input
        type="text"
        placeholder="Your Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        rows="4"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default TestimonialForm;
