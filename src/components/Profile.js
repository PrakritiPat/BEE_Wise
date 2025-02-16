import React, { useState } from "react";
import "./Profile.css"; // Importing the CSS file
import { useNavigate } from "react-router-dom";

import jar0 from "../assets/fonts/jar0.png";
import jar1 from "../assets/fonts/jar1.png";
import jar2 from "../assets/fonts/jar2.png";
import jar3 from "../assets/fonts/jar3.png";
import jar4 from "../assets/fonts/jar4.png";
import jar5 from "../assets/fonts/jar5.png";


const classes = [
  "COEN 12", "MATH 12", "PHYSICS 33", "COEN 20",
  "MATH 14", "CTW 1", "STATS"
];

// Jarfill component
const Jarfill = () => {
  const images = [
    jar0,
    jar1,
    jar2,
    jar3,
    jar4,
    jar5
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    const nextIndex = imageIndex + 1;

    if (nextIndex >= images.length) {
      setImageIndex(0);  // Reset to first image
      setShowMessage(false); // Hide message when resetting
    } else {
      setImageIndex(nextIndex);  
    }
  
    if (nextIndex === images.length - 1) {
      setShowMessage(true); // Show message when reaching jar5
    }
  };

  return (
    <div className="container2">
      <div className="image-container1">
        <img src={images[imageIndex]} id="myImage" alt="Jar Image" />
        <br />
        <button className="start" id="start" onClick={handleButtonClick}>
          Just finished a lesson!
        </button>
        <br />
        <br />
        {showMessage && (
          <div className="congrats-message">
            🎉 Congrats on reaching another 5 tutoring sessions! SCU has donated $5 to Greater Good all thanks to you! 🐝
          </div>
        )}
      </div>

      <div className="text-container1">
        <h2> How many bees have you saved? </h2>
        <br />
        <p className="smt">
          Bees pollinate 75% of the world's flowering plants and 35% of its crops, meaning life as we know it would not be the same without them. But, bee populations are declining, due to a variety of man-made factors including pesticides, habitat destruction and more. It is essential for us to be grateful for the role bees play in our lives, and working with the Greater Good Charity is one way we can do that. For every 5 tutoring sessions you complete, not only are you setting yourself up for success, but setting the world up for success by donating to bee relief funds.    
        </p>
      </div>
    </div>
  );
};

// Profile component
const Profile = () => {
  return (
    <>
      <div className="profile-container">
        {/* Circle Container */}
        <div className="circlecontainer">
          <div className="circle"></div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h2>Profile Name</h2>
        </div>

        {/* Profile Details */}
        <div className="ps">
          <p className="p">MAJOR: Computer Science</p>
          <p className="p1">GRADE: Junior Standing</p>
        </div>
      </div>

      <div className="class-taken">
        <h6 className="ct">Classes Taken</h6>
      </div>

      <div className="hexagons">
        <div className="hex1-grid">
          {classes.map((c, index) => (
            <button key={index} className="hexago">
              <span>{c}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Render Jarfill component */}
      <Jarfill />
    </>
  );
};

export default Profile;
