import { useState } from "react";
import words from "word-list-json"; // Import words as an array
import "./AnagramSolver.css"; // Import the CSS file

const AnagramSolver = ({ darkMode }) => {
  const [inputLetters, setInputLetters] = useState("");
  const [anagrams, setAnagrams] = useState([]);

  const findAnagrams = () => {
    const sortedInput = inputLetters.split("").toLowerCase().sort().join(""); // Sort input letters
    const results = words.filter((word) => {
      return word.length <= inputLetters.length && word.toLowerCase().split("").sort().join("") === sortedInput;
    });

    setAnagrams(results);
  };
  // const findAnagrams = () => {
  //   const letters = inputLetters.toLowerCase().split(""); // Renamed the variable
  //   const results = words.filter((word) => {
  //     const wordLetters = word.toLowerCase().split("");
  //     if (wordLetters.length !== letters.length) return false;
  //     for (let i = 0; i < wordLetters.length; i++) {
  //       if (letters.indexOf(wordLetters[i]) === -1) return false;
  //       letters.splice(letters.indexOf(wordLetters[i]), 1);
  //     }
  //     return true;
  //   });
  
  //   setAnagrams(results);
  // };

  return (
    <div className={`anagram-page ${darkMode ? "dark-mode" : ""}`}> {/* Full page gradient background */}
      <div className={`anagram-container ${darkMode ? "dark-container" : ""}`}> {/* White box for content */}
        <h2 className="anagram-title">Anagram Solver</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter letters..."
            className={`anagram-input ${darkMode ? "dark-input" : ""}`}
            value={inputLetters}
            onChange={(e) => setInputLetters(e.target.value)}
          />
          <button onClick={findAnagrams} className={`anagram-button ${darkMode ? "dark-button" : ""}`}>
            Solve
          </button>
        </div>

        <div className="anagram-results">
          {anagrams.length > 0 ? (
            // <ul className="anagram-list">
            //   {anagrams.map((word, index) => (
            //     <li key={index} className={`anagram-item ${darkMode ? "dark-item" : ""}`}>{word}</li>
            //   ))}
            // </ul>
            <ul className="anagram-list">
            {anagrams.map((word, index) => {
              console.log(word); // Log each anagram to the console
              return (
                <li key={index} className={`anagram-item ${darkMode ? "dark-item" : ""}`}>{word}</li>
              );
            })}
          </ul>
          ) : (
            <p className="no-anagrams">No anagrams found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnagramSolver;
