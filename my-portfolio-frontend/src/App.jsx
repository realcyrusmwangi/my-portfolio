// App.jsx

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './services';
import Skills from './Skills';
import FunFacts from './funfacts';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />

      {/* Main content wrapper with top padding */}
      <main className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/funfacts" element={<FunFacts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;