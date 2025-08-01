// src/About.jsx

import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">
        About Me
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
        I'm Cyrus Mwangi, a versatile IT professional with over 5 years of experience in application support, system implementation, and client training. I specialize in Oracle, PHP development, system integrations, and low-code automation.
        <br /><br />
        I've worked with government systems, private clients, and currently contribute to HR, payroll, and attendance system rollouts. I enjoy solving real-world tech problems and building tools that make work easier.
      </p>
    </section>
  );
};

export default About;

