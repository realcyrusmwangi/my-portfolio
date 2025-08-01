// src/Projects.jsx

import React from 'react';

const projects = [
  {
    title: 'HR & Payroll System Implementation',
    description:
      'Handled end-to-end setup of HR & Payroll systems for government and private clients — including data migration, training, and payroll reconciliation.',
  },
  {
    title: 'Task Tracker System (PHP + MySQL)',
    description:
      'A custom-built tool to manage support issues, track implementation progress, and organize technical tasks with user login and reporting.',
  },
  {
    title: 'Oracle Reports Customization',
    description:
      'Modified .rdf and .jsp reports for a legacy Oracle HRMS system to add tax elements, compliance fields, and enhance PDF/Excel outputs.',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-12 bg-gray-100 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-base">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
