import { useEffect, useState } from 'react';
import TestimonialForm from './TestimonialForm';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials')
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const addTestimonial = (newTestimonial) => {
    setTestimonials([newTestimonial, ...testimonials]);
  };

  return (
    <section id="testimonials" className="px-6 py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <TestimonialForm onAdd={addTestimonial} />

        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mt-12 mb-10">
          Testimonials
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">“{t.message}”</p>
              <div className="text-blue-600 font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
