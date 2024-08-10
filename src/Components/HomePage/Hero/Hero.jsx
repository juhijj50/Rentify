import React from "react";
import "./Hero.css";
import heroImage from "../../../assets/hero.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Rentify</h1>
        <p>Your seamless car rental experience starts here</p>
        <button className="hero-button">Book a Car</button>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </div>
  );
}
