import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: "url('/images/home-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I'm <span className="text-blue-400">Cyrus Mwangi</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          I’m a dedicated IT professional with expertise in systems implementation,
          Oracle, PHP development, technical support, and low-code tools. I create
          impactful digital solutions that empower teams and simplify workflows.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Let’s Connect
        </Link>
      </div>
    </section>
  );
};

export default Home;
