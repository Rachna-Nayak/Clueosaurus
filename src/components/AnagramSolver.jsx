import { useState } from "react";
import words from "word-list-json"; // Import words as an array

const AnagramSolver = () => {
  const [inputLetters, setInputLetters] = useState("");
  const [anagrams, setAnagrams] = useState([]);

  const findAnagrams = () => {
    const sortedInput = inputLetters.split("").sort().join(""); // Sort input letters
    const results = words.filter((word) => {
      return word.length <= inputLetters.length && word.split("").sort().join("") === sortedInput;
    });

    setAnagrams(results);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Anagram Solver</h2>

      <div className="flex">
        <input
          type="text"
          placeholder="Enter letters..."
          className="flex-1 p-2 border rounded-l-lg"
          value={inputLetters}
          onChange={(e) => setInputLetters(e.target.value)}
        />
        <button onClick={findAnagrams} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Solve
        </button>
      </div>

      <div className="mt-4">
        {anagrams.length > 0 ? (
          <ul className="list-disc pl-6">
            {anagrams.map((word, index) => (
              <li key={index} className="text-gray-700">{word}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No anagrams found.</p>
        )}
      </div>
    </div>
  );
};

export default AnagramSolver;

