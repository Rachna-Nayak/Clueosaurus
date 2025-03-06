import { Link } from "react-router-dom";
import "./Home.css"; // Import the external CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Clueosaurus 🦖</h1>
      <p className="home-subtitle">
        Your ultimate word-solving companion! Discover words, solve anagrams, and more.
      </p>

      <div className="button-container">
        <Link to="/dictionary" className="home-button dictionary">
          📖 Dictionary
        </Link>

        <Link to="/anagram-solver" className="home-button anagram">
          🔠 Anagram Solver
        </Link>

        <Link to="/word-search" className="home-button wordsearch">
          🔍 Word Search
        </Link>
      </div>
    </div>
  );
};

export default Home;
