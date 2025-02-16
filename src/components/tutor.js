import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./tutor.css";
import bear from "../assets/fonts/tutorBear.png"; 
import ZoomButton from "./ZoomButton";

const tutorData = {
  "COEN 12": ["Sarayu Unnam", "Layla Cotts"],
  "MATH 12": ["Sarayu Unnam", "John Dole"],
  "PHYSICS 33": ["Prakriti Patnaik", "Samia Ahmer"],
  "COEN 20": ["Aanav Patel", "Henry Golden"],
  "MATH 14": ["Sarayu Unnam", "Liv Morgan"],
  "CTW 1": ["Samia Ahmer", "Noah Walsh"],
  "STATS": ["Liv Morgan", "Emily Kind"],
  "COEN 79": ["Sarayu Unnam", "Grace Li"]
}; 

const Tutors = () => {
  const { classname } = useParams();
  console.log(`Received classname: ${classname}`);
  const navigate = useNavigate();
  /*const tutors = tutorData[classname] || [];*/

  const tutors = tutorData[classname.toUpperCase()] || [];



  /*console.log("Classname from URL:", classname); // Debug log
  console.log('Tutors for this class:', tutors); */

  return (
    <div className="tutor-container">
      <h1 className="title">Tutors for {classname}</h1>
      {tutors.length > 0 ? (
        <ul className="tutor-list">
          {tutors.map((tutor, index) => (
            <li key={index}>{tutor}</li>
          ))}
        </ul>
      ) : (
        <p>No tutors available for this class.</p>
      )}
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
      <ZoomButton />
      <img src={bear} className="bear" /> 

    </div>
  );
};

export default Tutors;
