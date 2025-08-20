import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './services';
import Skills from './Skills';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Navbar from './Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    // REMOVED overflow-x-hidden from this div - this was causing the double scrollbar
    <div className="min-h-screen w-full">
      <ScrollToTop />
      <Navbar />
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