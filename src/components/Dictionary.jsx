import { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWordData = async () => {
    setError("");
    setData(null);

    if (!word.trim()) return;

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);  //fetching definition using the api
      if (!response.ok) throw new Error("Word not found");

      const result = await response.json();
      setData(result); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dictionary-page">
      <div className="dictionary-container">
        <h2 className="dictionary-title">Dictionary</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a word..."
            className="dictionary-input"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button onClick={fetchWordData} className="search-button">
            Search
          </button>
        </div>

        {error && <p className="error-text">{error}</p>}

        {data && (
          <div className="definition-box">
            {data.map((entry, entryIndex) => (
              <div key={entryIndex} className="entry">
                <h3 className="definition-word">{entry.word}</h3>

                {entry.meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex} className="meaning-box">
                    <p className="part-of-speech">{meaning.partOfSpeech}</p>

                    {meaning.definitions.map((def, defIndex) => (
                      <p key={defIndex} className="definition">
                        {defIndex + 1}. {def.definition}
                      </p>
                    ))}
                  </div>
                ))}

                {entry.meanings.some((meaning) => meaning.synonyms.length > 0) && (
                  <p className="synonyms">
                    <strong>Synonyms:</strong>{" "}
                    {entry.meanings.flatMap((meaning) => meaning.synonyms).join(", ")}
                  </p>
                )}

                {entry.meanings.some((meaning) => meaning.antonyms.length > 0) && (
                  <p className="antonyms">
                    <strong>Antonyms:</strong>{" "}
                    {entry.meanings.flatMap((meaning) => meaning.antonyms).join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
