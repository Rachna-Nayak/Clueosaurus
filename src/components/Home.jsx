import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 text-gray-900 p-6">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Welcome to Clueosaurus 🦖
      </h1>
      <p className="text-lg mb-6 max-w-md text-center opacity-90">
        Your ultimate word-solving companion! Discover words, solve anagrams, and more.
      </p>

      <div className="flex flex-wrap gap-6">
        <Link
          to="/dictionary"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-blue-100"
        >
          📖 Go to Dictionary
        </Link>

        <Link
          to="/anagram-solver"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-yellow-300"
        >
          🔠 Anagram Solver 
        </Link>

        <Link
          to="/word-search"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-yellow-300"
        >
          🔍 Word Search
        </Link>
      </div>
    </div>
  );
};

export default Home;
