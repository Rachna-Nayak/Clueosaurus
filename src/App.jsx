import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dictionary from "./components/Dictionary";
import AnagramSolver from "./components/AnagramSolver";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/anagram-solver" element={<AnagramSolver />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


