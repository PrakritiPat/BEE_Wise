import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './searchclass.css';


const classes = [
  "COEN 12", "MATH 12", "PHYSICS 33", "COEN 20",
  "MATH 14", "CTW 1", "STATS", "COEN 79"
];

const Searchclass = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredClasses = classes.filter(c =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center p-8">
      <input
        type="text"
        placeholder="Search for classes..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="hex-grid">
        {filteredClasses.map((c, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(`Navigating to /tutors/${c}`);
              navigate(`/tutors/${c}`);
            }}
              /*navigate(`/tutors/${c}`)}*/
            className="hexagon"
          >
          <span>{c}</span>
          
          </button>
        ))}
      </div>
    </div>
  );
};

export default Searchclass;
