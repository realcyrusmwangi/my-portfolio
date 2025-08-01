// src/Skills.jsx

import React from 'react';

const skills = [
  'PHP & MySQL',
  'Oracle Reports Developer',
  'System Implementation',
  'Technical Support',
  'Power Automate',
  'Tailwind CSS',
  'JavaScript & React',
  'Data Migration & Reconciliation',
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-12 bg-white text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-100 text-blue-800 font-medium py-3 px-4 rounded-xl shadow hover:bg-blue-200 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
