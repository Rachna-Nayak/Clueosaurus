import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`py-4 $shadow-lg fixed top-0 left-0 w-full z-50 transition duration-300 
       ${darkMode ? "bg-[#4f46e5] text-white border border-white" : "bg-blue-500 text-white"}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

          <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-200">
            Clueosaurus 🦖
          </Link>

          <div className="space-x-6">
            <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
            <Link to="/dictionary" className="hover:text-gray-300">Dictionary</Link>
            <Link to="/anagram-solver" className="hover:text-gray-300">Anagram Solver</Link>
            <Link to="/word-search" className="hover:text-gray-300">Word Search</Link>
          </div>

          {/* Dark Mode Toggle */}
          <button
            className="ml-4 px-3 py-1 border rounded flex items-center space-x-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>{darkMode ? "To Light Mode" : "To Dark Mode"}</span>
          </button>
        </div>
    </nav>
  );
};

export default Navbar;


