// src/components/Home.jsx

import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">
        Hi, I'm Cyrus Mwangi
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        A passionate IT professional specializing in systems implementation, technical support, Oracle, PHP, and low-code tools.
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Let’s Connect
      </a>
    </section>
  );
};

export default Home;
