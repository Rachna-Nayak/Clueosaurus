import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200">
          Clueosaurus 🦖
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
          <Link to="/dictionary" className="hover:text-gray-300">Dictionary</Link>
          <Link to="/anagram-solver" className="hover:text-gray-300">Anagram Solver</Link>
          <Link to="/word-search" className="hover:text-gray-300">Word Search</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
