import { useState } from "react";
import wordList from "word-list-json"; // Ensure this is installed
import "./WordSearch.css"; // Import the CSS file

const WordSearch = ({ darkMode }) => {
  const [pattern, setPattern] = useState("");
  const [results, setResults] = useState([]);

  const searchWords = () => {
    const regexPattern = new RegExp("^" + pattern.replace(/\?/g, ".") + "$");
    const matchingWords = wordList.filter((word) => regexPattern.test(word));
    setResults(matchingWords);
  };

  return (
    <div className={`wordsearch-page ${darkMode ? "dark-mode" : ""}`}>
      <div className={`wordsearch-container ${darkMode ? "dark-container" : ""}`}>
        <h2 className={`wordsearch-title ${darkMode ? "dark-item" : ""}`}>Word Search</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter pattern (e.g., a??n?)"
            className={`wordsearch-input ${darkMode ? "dark-input" : ""}`}
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
          <button onClick={searchWords} className={`wordsearch-button ${darkMode ? "dark-button" : ""}`}>
            Search
          </button>
        </div>

        <div className="wordsearch-results">
          {results.length > 0 ? (
            <ul className="wordsearch-list">
              {results.map((word, index) => (
                <li key={index} className={`wordsearch-item ${darkMode ? "dark-item" : ""}`}>
                  {word}
                </li>
              ))}
            </ul>
          ) : (
            <p className={`no-results ${darkMode ? "dark-item" : ""}`}>No matching words found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordSearch;
