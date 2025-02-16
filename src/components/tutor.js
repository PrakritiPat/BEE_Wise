import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./tutor.css";
import bear from "../assets/fonts/tutorBear.png"; 
import ZoomButton from "./ZoomButton";

const tutorData = {
  "COEN 12": [
    { name: "Sarayu Unnam", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Layla Cotts", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "MATH 12": [
    { name: "Sarayu Unnam", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "John Dole", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "PHYSICS 33": [
    { name: "Prakriti Patnaik", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Samia Ahmer", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "COEN 20": [
    { name: "Aanav Patel", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Samia Ahmer", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "MATH 14": [
    { name: "Sarayu Unnam", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Liv Morgan", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "CTW 1": [
    { name: "Aanav Patel", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Samia Ahmer", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "STATS": [
    { name: "Liv Morgan", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Emily Kind", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ],
  "COEN 79": [
    { name: "Sarayu Unnam", zoomLink: "https://zoom.us/j/your_meeting_id1" },
    { name: "Grace Li", zoomLink: "https://zoom.us/j/your_meeting_id1" },
  ]
};

const Tutors = () => {
  const { classname } = useParams();
  const navigate = useNavigate();
  const tutors = tutorData[classname.toUpperCase()] || [];

  const handleClick = (zoomLink) => {
    window.open(zoomLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="tutor-container">
      <h1 className="title">Tutors for {classname}</h1>
      {tutors.length > 0 ? (
        <ul className="tutor-list">
          {tutors.map((tutor, index) => (
            <li
              key={index}
              className="tutor-item"
              onClick={() => handleClick(tutor.zoomLink)}
            >
              {tutor.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tutors available for this class.</p>
      )}

      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
      <ZoomButton />
      <img src={bear} className="bear" /> 

      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Tutors;
