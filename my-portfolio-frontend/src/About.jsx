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
        I'm Cyrus Mwangi, an application Support Engineer with over six years of experience in IT support, enterprise application implementation, and database administration—particularly in financial, HRMS, and ERP environments. Proficient in supporting and configuring scalable systems such as Oracle Forms & Reports, BIRT, and ERP/payroll platforms.
        <br /><br />
        Skilled in resolving application issues, documenting system configurations, and delivering user training and technical manuals. Adept at system optimization, report development, and ensuring minimal downtime for critical business applications.
        <br /><br />
        Strong communicator with a proven track record of aligning IT solutions with dynamic business requirements through collaboration with cross-functional teams.
      </p>
    </section>
  );
};

export default About;

