import React from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Selection from "./components/Selection";
import Searchclass from "./components/searchclass";
import ZoomButton from "./components/ZoomButton";
import Searchclass2 from "./components/searchclass2"; // Import component
import Tutors2 from "./components/tutor2"; // Import component
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
//import {Routes, Route } from "react-router-dom";
import Login from './login';
import Tutors from "./components/tutor"; 

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
        <Route path="/searchclass2" element={<Searchclass2 />} />
        <Route path="/tutors/:classname" element={<Tutors />} />
        <Route path="/tutors2/:classname" element={<Tutors2 />} />
        <Route path="/ZoomButtons" element={<ZoomButton />} />

        
      </Routes>
    </Router>
    </div>
  );
}
export default App;
