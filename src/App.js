import React from "react";
import Home from "./components/Home";
import Selection from "./components/Selection";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection" element={<Selection />} />
        
      </Routes>
    </Router>
  );
}
export default App;
