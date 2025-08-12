// src/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-extrabold text-indigo-600 tracking-tight">
          My Portfolio
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
  `px-1 py-1 transition-all duration-300 ease-in-out ${isActive
    ? "text-indigo-600 underline underline-offset-8 decoration-2"
    : "text-gray-700 hover:text-indigo-600 hover:scale-105"}`
}

            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 shadow-inner px-4 pb-4 space-y-3">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-semibold transition-colors ${isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
