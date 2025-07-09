import { useEffect, useState } from 'react';
import TestimonialForm from './TestimonialForm';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const addTestimonial = (newTestimonial) => {
    setTestimonials([newTestimonial, ...testimonials]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <TestimonialForm onAdd={addTestimonial} />

      <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{t.position}</p>
            <p className="text-gray-700">{t.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
