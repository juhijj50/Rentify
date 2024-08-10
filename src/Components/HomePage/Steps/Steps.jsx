import React from "react";
import "./Steps.css";
import step1Icon from "../../../assets/step1-icon.jpg";
import step2Icon from "../../../assets/step2-icon.jpg";
import step3Icon from "../../../assets/step3-icon.png";

export default function Steps() {
  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <img src={step1Icon} alt="Step 1: Choose Your Car" className="step-icon" />
          <div className="step-content">
            <h3>Step 1: Choose Your Car</h3>
            <p>Select from a wide range of vehicles that suit your needs and preferences.</p>
          </div>
        </div>
        <div className="step">
          <img src={step2Icon} alt="Step 2: Book Online" className="step-icon" />
          <div className="step-content">
            <h3>Step 2: Book Online</h3>
            <p>Complete your booking through our easy-to-use online system.</p>
          </div>
        </div>
        <div className="step">
          <img src={step3Icon} alt="Step 3: Enjoy Your Ride" className="step-icon" />
          <div className="step-content">
            <h3>Step 3: Enjoy Your Ride</h3>
            <p>Pick up your car and enjoy your journey. It’s that simple!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

