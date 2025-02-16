import React from "react";
import Home from "./components/Home";
import Selection from "./components/Selection";
import Profile from "./components/Profile";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import Login from './login'; 

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />


        
      </Routes>
    </Router>
    </div>
  );
}
export default App;
