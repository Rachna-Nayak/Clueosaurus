import { useState } from "react";
import wordList from "word-list-json"; // Ensure this is installed

const WordSearch = () => {
  const [pattern, setPattern] = useState("");
  const [results, setResults] = useState([]);

  const searchWords = () => {
    const regexPattern = new RegExp("^" + pattern.replace(/\?/g, ".") + "$");
    
    const matchingWords = wordList.filter((word) => regexPattern.test(word));
    
    setResults(matchingWords);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Word Search</h2>

      <div className="flex">
        <input
          type="text"
          placeholder="Enter pattern (e.g., a??n?)"
          className="flex-1 p-2 border rounded-l-lg"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        />
        <button onClick={searchWords} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Search
        </button>
      </div>

      <div className="mt-4">
        {results.length > 0 ? (
          <ul className="list-disc pl-6">
            {results.map((word, index) => (
              <li key={index} className="text-gray-700">{word}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No matching words found.</p>
        )}
      </div>
    </div>
  );
};

export default WordSearch;
