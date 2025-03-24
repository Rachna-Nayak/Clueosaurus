// import { useState } from "react";
// import "./Dictionary.css";

// const Dictionary = ({darkMode}) => {
//   const [word, setWord] = useState("");
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");

//   const fetchWordData = async () => {
//     setError("");
//     setData(null);

//     if (!word.trim()) return;

//     try {
//       const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);  //fetching definition using the api
//       if (!response.ok) throw new Error("Word not found");

//       const result = await response.json();
//       setData(result); 
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className={`dictionary-page ${darkMode ? "dark-mode" : ""}`}>
//       <div className={`dictionary-container ${darkMode ? "dark-container" : ""}`}>
//         <h2 className="dictionary-title">Dictionary</h2>

//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Enter a word..."
//             className={`dictionary-input ${darkMode ? "dark-input" : ""}`}
//             value={word}
//             onChange={(e) => setWord(e.target.value)}
//           />
//           <button onClick={fetchWordData} className={`search-button ${darkMode ? "dark-button" : ""}`}>
//             Search
//           </button>
//         </div>

//         {error && <p className="error-text">{error}</p>}

//         {data && (
//           <div className="definition-box">
//             {data.map((entry, entryIndex) => (
//               <div key={entryIndex} className="entry">
//                 <h3 className={`definition-word ${darkMode ? "dark-item" : ""}`}>{entry.word}</h3>

//                 {entry.meanings.map((meaning, meaningIndex) => (
//                   <div key={meaningIndex} className="meaning-box">
//                     <p className="part-of-speech">{meaning.partOfSpeech}</p>

//                     {meaning.definitions.map((def, defIndex) => (
//                       <p key={defIndex} className="definition">
//                         {defIndex + 1}. {def.definition}
//                       </p>
//                     ))}
//                   </div>
//                 ))}

//                 {entry.meanings.some((meaning) => meaning.synonyms.length > 0) && (
//                   <p className="synonyms">
//                     <strong>Synonyms:</strong>{" "}
//                     {entry.meanings.flatMap((meaning) => meaning.synonyms).join(", ")}
//                   </p>
//                 )}

//                 {entry.meanings.some((meaning) => meaning.antonyms.length > 0) && (
//                   <p className="antonyms">
//                     <strong>Antonyms:</strong>{" "}
//                     {entry.meanings.flatMap((meaning) => meaning.antonyms).join(", ")}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dictionary;
import { useState } from "react";
import "./Dictionary.css";

const Dictionary = ({ darkMode }) => {
  const [word, setWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchWordData = async () => {
    setError("");
    setData(null);
    
    const trimmedWord = word.trim();
    if (!trimmedWord) return; // Prevent empty searches

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${trimmedWord}`);
      if (!response.ok) throw new Error("Word not found");

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  };

  // Allows searching with Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWordData();
  };

  return (
    <div className={`dictionary-page ${darkMode ? "dark-mode" : ""}`}>
      <div className={`dictionary-container ${darkMode ? "dark-container" : ""}`}>
        <h2 className="dictionary-title">Dictionary</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a word..."
            className={`dictionary-input ${darkMode ? "dark-input" : ""}`}
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={handleKeyDown} // Search on Enter
          />
          <button onClick={fetchWordData} className={`search-button ${darkMode ? "dark-button" : ""}`}>
            Search
          </button>
        </div>

        {error && <p className="error-text">{error}</p>}

        {data && (
          <div className="definition-box">
            {data.map((entry, entryIndex) => (
              <div key={entryIndex} className="entry">
                <h3 className={`definition-word ${darkMode ? "dark-item" : ""}`}>{entry.word}</h3>

                {entry.phonetics.length > 0 && (
                  <p className="definition-phonetic">
                    {entry.phonetics.find(p => p.text)?.text || ""}
                  </p>
                )}

                {entry.meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex} className="meaning-box">
                    <p className="part-of-speech">{meaning.partOfSpeech}</p>

                    {meaning.definitions.map((def, defIndex) => (
                      <p key={defIndex} className={`definition ${darkMode ? "dark-item" : ""}`}>
                        {defIndex + 1}. {def.definition}
                      </p>
                    ))}
                  </div>
                ))}

                {entry.meanings.some((meaning) => meaning.synonyms.length > 0) && (
                  <p className="synonyms">
                    <strong>Synonyms:</strong>{" "}
                    {entry.meanings.flatMap((meaning) => meaning.synonyms).join(", ") || "None"}
                  </p>
                )}

                {entry.meanings.some((meaning) => meaning.antonyms.length > 0) && (
                  <p className="antonyms">
                    <strong>Antonyms:</strong>{" "}
                    {entry.meanings.flatMap((meaning) => meaning.antonyms).join(", ") || "None"}
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
