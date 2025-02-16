import React from "react";
import {useNavigate} from "react-router-dom";
import "./Selection.css";


function Selection() {
  let navigate = useNavigate();
  
  return (
    <div>
     
      <h1 className="title">HONEY TUTORING</h1>

      <div className="container1">
        <button4>I can tutor!</button4>
      <button4>I need a tutor!</button4>
   
      


      </div>

      <p className="footer-text">YOU CAN DO BOTH</p>

      <button className="button55" onClick={() => navigate("/Searchclass")}>Next</button>


    </div>
  );
}

export default Selection;

