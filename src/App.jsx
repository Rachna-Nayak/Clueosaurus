// // // import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Home from "./components/Home";
// // // import Dictionary from "./components/Dictionary";
// // // import AnagramSolver from "./components/AnagramSolver";
// // // import WordSearch from "./components/WordSearch";

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="min-h-screen bg-gray-100">
// // //         <Navbar />

// // //         <Routes>
// // //           {/* Redirect "/" to "/Home" */}
// // //           <Route path="/" element={<Navigate to="/home" />} />
// // //           <Route path="/home" element={<Home />} />
// // //           <Route path="/dictionary" element={<Dictionary />} />
// // //           <Route path="/anagram-solver" element={<AnagramSolver />} />
// // //           <Route path="/word-search" element={<WordSearch />} />
// // //           <Route path="*" element={<h1>404 Not Found</h1>} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// // import { useState, useEffect } from "react";
// // import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./components/Home";
// // import Dictionary from "./components/Dictionary";
// // import AnagramSolver from "./components/AnagramSolver";
// // import WordSearch from "./components/WordSearch";

// // function App() {
// //   // State for dark mode
// //   const [darkMode, setDarkMode] = useState(() => {
// //     return localStorage.getItem("theme") === "dark";
// //   });

// //   // Apply dark mode class to <body> when state changes
// //   useEffect(() => {
// //     if (darkMode) {
// //       document.body.classList.add("dark-mode");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       document.body.classList.remove("dark-mode");
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [darkMode]);

// //   return (
// //     <Router>
// //       {/* Apply dark mode styling */}
// //       <div className={`min-h-screen pt-16 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
// //         {/* Pass dark mode state and setter to Navbar */}
// //         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

// //         <Routes>
// //           <Route path="/" element={<Navigate to="/home" />} />
// //           <Route path="/home" element={<Home />} />
// //           <Route path="/dictionary" element={<Dictionary />} />
// //           <Route path="/anagram-solver" element={<AnagramSolver />} />
// //           <Route path="/word-search" element={<WordSearch />} />
// //           <Route path="*" element={<h1>404 Not Found</h1>} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Dictionary from "./components/Dictionary";
// import AnagramSolver from "./components/AnagramSolver";
// import WordSearch from "./components/WordSearch";

// function App() {
//   const [darkMode, setDarkMode] = useState(false); // Dark mode state

//   return (
//     <Router>
//       {/* Apply dark mode class globally */}
//       <div className={`min-h-screen pt-16 transition-colors duration-300 
//         ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>

//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/dictionary" element={<Dictionary />} />
//           <Route path="/anagram-solver" element={<AnagramSolver />} />
//           <Route path="/word-search" element={<WordSearch />} />
//           <Route path="*" element={<h1>404 Not Found</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dictionary from "./components/Dictionary";
import AnagramSolver from "./components/AnagramSolver";
import WordSearch from "./components/WordSearch";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Store dark mode state

  return (
    <Router>
      {/* Apply dark mode to the entire app */}
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home darkMode={darkMode} />} />
          <Route path="/dictionary" element={<Dictionary darkMode={darkMode} />} />
          <Route path="/anagram-solver" element={<AnagramSolver darkMode={darkMode} />} />
          <Route path="/word-search" element={<WordSearch darkMode={darkMode} />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;