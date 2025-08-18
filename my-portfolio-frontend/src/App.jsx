import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './services';
import Skills from './Skills';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Navbar from './Navbar';
import ScrollToTop from './components/ScrollToTop'; // Make sure this file exists

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Scroll-to-top component - must be placed here */}
      <ScrollToTop />
      
      {/* Your navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;