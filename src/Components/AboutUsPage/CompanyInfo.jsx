import React from "react";
import "./CompanyInfo.css";
import teamImage from "../../assets/team.avif"; // Example image path

export default function CompanyInfo() {
  return (
    <div className="company-info">
      <div className="company-info-content">
        <div className="company-info-text">
          <h2>About Us</h2>
          <p>
            At Rentify, we are dedicated to providing you with the best car rental experience. Our mission is to offer a seamless and reliable service, whether you're looking for a luxury car, a practical van, or a fuel-efficient city car. Our team of experts ensures that every vehicle in our fleet meets the highest standards of quality and performance.
          </p>
          <p>
            Our commitment to customer satisfaction is our top priority. We strive to make every rental experience smooth and enjoyable, from the moment you book with us to the day you return the vehicle. Discover our wide range of vehicles and exceptional service today.
          </p>
        </div>
        <div className="company-info-image">
          <img src={teamImage} alt="Our Team" />
        </div>
      </div>
    </div>
  );
}
