import React from "react";
import "./Selection.css";
import { useNavigate } from "react-router-dom";

function Selection() {
  let navigate = useNavigate();
  
  return (

    <div>
      <h1 className="title3">BEE WISE TUTORING</h1>

      {/* Wrap hexagons inside a container */}
      <div className="hex-container">
        <button className="hex" onClick={() => navigate("/Searchclass2")}>I can tutor!</button>
        <button className="hex" onClick={() => navigate("/Searchclass")}>I need a tutor!</button>
      </div>

    </div>
  );
}

export default Selection;
