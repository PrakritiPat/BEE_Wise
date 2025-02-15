import React from "react";
import {useNavigate} from "react-router-dom";
import "./Selection.css";


function Selection() {
  return (
    <div>
     
      <h1 className="title">HONEY TUTORING</h1>

      <div className="container1">
        <button>
          <img src="/public/canbutton.png" alt="Button Image" />
      </button>
      <button>I need a tutor!</button>
   
      


      </div>

      <p className="footer-text">YOU CAN DO BOTH</p>

      <button className="next-btn">Next</button>
    </div>
  );
}

export default Selection;

