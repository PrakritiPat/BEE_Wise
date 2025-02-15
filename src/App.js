import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
