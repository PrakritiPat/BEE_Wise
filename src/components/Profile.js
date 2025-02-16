import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <h1 className="main-title">HONEY TUTORING</h1>
      <h2 className="tutor">TUTOR</h2>

      <section className="profile-section">
        <div className="profile-header">
          <div className="profile-image"></div> {/* Circular placeholder */}
          <h2 className="profile-name">PROFILE NAME</h2>
        </div>
        <p className="major-grade">
          Major: Computer Science<br />
          Grade: 11
        </p>
        <h2 className="classes-taken">CLASSES TAKEN</h2>
      </section>
    </div>
  );
}

export default Profile;
