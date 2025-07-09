import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">
          My Portfolio
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link to="/projects" className="text-gray-700 hover:text-indigo-600">Projects</Link>
          <Link to="/skills" className="text-gray-700 hover:text-indigo-600">Skills</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
