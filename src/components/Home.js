import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import bearImage from "../assets/fonts/bear1.png"; // Import bear image

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="background-container">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div class="text-container">
          <h1>HONEY TUTORING</h1>
          <p>
            Empowering students, sustaining the future. We provide resources and
            support to help students thrive while promoting sustainable practices
            that create a better tomorrow. Join us in making education and the
            planet more sustainable, one step at a time.
          </p>
        </div>

        <img src={bearImage} alt="Bear" className="bear-image" />

        <div className="button-container">
          <button-five onClick={() => navigate("/Login")}>Login</button-five>
          <button-five onClick={() => navigate("/Selection")}>Sign Up</button-five>
        </div>
      </div>
    </div>
  );
};

export default Home;
