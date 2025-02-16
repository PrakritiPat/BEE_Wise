import React from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Searchclass from "./components/searchclass";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
//import {Routes, Route } from "react-router-dom";
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
        <Route path="/searchclass" element={<Searchclass />} />

        
      </Routes>
    </Router>
    </div>
  );
}
export default App;
