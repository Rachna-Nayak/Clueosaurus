import { useState } from "react";
import wordList from "word-list-json"; // Ensure this is installed
import "./WordSearch.css"; // Import the CSS file

const WordSearch = () => {
  const [pattern, setPattern] = useState("");
  const [results, setResults] = useState([]);

  const searchWords = () => {
    const regexPattern = new RegExp("^" + pattern.replace(/\?/g, ".") + "$");
    const matchingWords = wordList.filter((word) => regexPattern.test(word));
    setResults(matchingWords);
  };

  return (
    <div className="wordsearch-page"> {/* Full page gradient background */}
      <div className="wordsearch-container"> {/* White box for content */}
        <h2 className="wordsearch-title">Word Search</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter pattern (e.g., a??n?)"
            className="wordsearch-input"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          />
          <button onClick={searchWords} className="wordsearch-button">
            Search
          </button>
        </div>

        <div className="wordsearch-results">
          {results.length > 0 ? (
            <ul className="wordsearch-list">
              {results.map((word, index) => (
                <li key={index} className="wordsearch-item">{word}</li>
              ))}
            </ul>
          ) : (
            <p className="no-results">No matching words found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordSearch;
