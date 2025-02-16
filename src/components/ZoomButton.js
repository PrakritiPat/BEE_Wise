import React from "react";
import "./ZoomButton.css";

function ZoomButton() {
  const zoomLink = "https://zoom.us/j/your_meeting_id"; // Replace with your Zoom meeting link

  return (
    <div className="zoom-container">
      <button className="zoom-button" onClick={() => window.open(zoomLink, "_blank")}>
        Join
      </button>
    </div>
  );
}

export default ZoomButton;
