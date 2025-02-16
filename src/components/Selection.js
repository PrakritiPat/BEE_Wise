import React from "react";
import "./Selection.css";

function Selection() {
  return (
    <div>
      <h1 className="title">HONEY TUTORING</h1>

      {/* Wrap hexagons inside a container */}
      <div className="hex-container">
        <div className="hex"><span>I can tutor!</span></div>
        <div className="hex"><span>I need a tutor!</span></div>
      </div>

      <p className="footer-text">YOU CAN DO BOTH</p>

      <button className="next-btn">Next</button>
    </div>
  );
}

export default Selection;
