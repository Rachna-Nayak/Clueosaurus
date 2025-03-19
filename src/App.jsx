// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Dictionary from "./components/Dictionary";
// import AnagramSolver from "./components/AnagramSolver";
// import WordSearch from "./components/WordSearch";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         {/* Navbar appears on all pages */}
//         <Navbar />

//         {/* Page Routing */}
//         <Routes>
//           <Route path="/" element={<Home />} />
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
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dictionary from "./components/Dictionary";
import AnagramSolver from "./components/AnagramSolver";
import WordSearch from "./components/WordSearch";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <Routes>
          {/* Redirect "/" to "/Home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/anagram-solver" element={<AnagramSolver />} />
          <Route path="/word-search" element={<WordSearch />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

