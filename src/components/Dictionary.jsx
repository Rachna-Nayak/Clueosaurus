import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dictionary.css"; // Import the external CSS file

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDefinition = async () => {
    if (!word) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      if (response.ok) {
        setDefinition(data[0]);
      } else {
        setDefinition(null);
        setError("Word not found. Try another.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="dictionary-container">
      <div className="dictionary-box">
        <h1 className="text-2xl font-bold text-center my-4">Dictionary</h1>

        <div className="flex space-x-2">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word..."
            className="input-field"
          />
          <button onClick={fetchDefinition} className="search-button">
            Search
          </button>
        </div>

        {loading && <p className="loading-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}

        {definition && (
          <div className="definition-box">
            <h2 className="definition-word">{definition.word}</h2>
            <p className="definition-phonetic">{definition.phonetic}</p>
            <ul className="mt-2">
              {definition.meanings.map((meaning, index) => (
                <li key={index} className="definition-meaning">
                  <strong>{meaning.partOfSpeech}</strong>: {meaning.definitions[0].definition}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
