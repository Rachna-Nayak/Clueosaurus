import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      <h1 className="text-2xl font-bold text-center my-4">Dictionary</h1>

      <div className="flex space-x-2">
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={fetchDefinition}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4 text-center text-gray-500">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {definition && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">{definition.word}</h2>
          <p className="italic text-gray-500">{definition.phonetic}</p>
          <ul className="mt-2">
            {definition.meanings.map((meaning, index) => (
              <li key={index} className="mt-2">
                <strong>{meaning.partOfSpeech}</strong>: {meaning.definitions[0].definition}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
