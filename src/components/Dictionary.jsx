import { useState } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWordData = async () => {
    setError("");
    setData(null);

    if (!word.trim()) return;

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) throw new Error("Word not found");

      const result = await response.json();
      setData(result); // Store full API response
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="dictionary-container">
      <h2 className="text-2xl font-bold mb-4">Dictionary</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a word..."
          className="input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={fetchWordData} className="btn">
          Search
        </button>
      </div>

      {error && <p className="error-text">{error}</p>}

      {data && (
        <div className="result-container">
          {data.map((entry, entryIndex) => (
            <div key={entryIndex} className="entry">
              <h3 className="text-xl font-semibold">{entry.word}</h3>

              {entry.meanings.map((meaning, meaningIndex) => (
                <div key={meaningIndex} className="meaning-box">
                  <p className="part-of-speech">{meaning.partOfSpeech}</p>

                  {meaning.definitions.map((def, defIndex) => (
                    <p key={defIndex} className="definition">
                      {defIndex + 1}. {def.definition}
                    </p>
                  ))}

                  {meaning.synonyms.length > 0 && (
                    <p className="synonyms">
                      <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
                    </p>
                  )}

                  {meaning.antonyms.length > 0 && (
                    <p className="antonyms">
                      <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dictionary;
