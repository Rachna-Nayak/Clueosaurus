import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Clueosaurus 🦖</h1>
      <p className="text-lg text-gray-600 mb-4">Your ultimate word-solving companion!</p>
      <div className="space-x-4">
        <Link to="/dictionary" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go to Dictionary
        </Link>
        <Link to="/anagram-solver" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Anagram Solver (Coming Soon)
        </Link>
      </div>
    </div>
  );
};

export default Home;
