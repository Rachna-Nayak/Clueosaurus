import { Link } from "react-router-dom";
import "./Home.css"; // Import the external CSS file

const Home = ({ darkMode }) => {
  return (
    <div className={`home-container ${darkMode ? "dark-mode" : ""}`}>
      <h1 className={`home-title ${darkMode ? "dark-item" : ""}`}>Welcome to Clueosaurus 🦖</h1>
      <p className={`home-subtitle ${darkMode ? "dark-item" : ""}`}>
        Your ultimate word-solving companion! Discover words, solve anagrams, and more.
      </p>

      <div className="button-container">
        <Link to="/dictionary" className={`home-button dictionary ${darkMode ? "dark-button" : ""}`}>
          📖 Dictionary
        </Link>

        <Link to="/anagram-solver" className={`home-button anagram ${darkMode ? "dark-button" : ""}`}>
          🔠 Anagram Solver
        </Link>

        <Link to="/word-search" className={`home-button wordsearch ${darkMode ? "dark-button" : ""}`}>
          🔍 Word Search
        </Link>
      </div>
    </div>
  );
};

export default Home;
