import { Routes, Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Navbar from './Navbar';  // ✅ Import your new Navbar

function Home() {
  return <h1 className="text-4xl text-center mt-10">Welcome to My Portfolio</h1>;
}

function App() {
  return (
    <div>
      <Navbar />  {/* ✅ Use the Navbar component here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
