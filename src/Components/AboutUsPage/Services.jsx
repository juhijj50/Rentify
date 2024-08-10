import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-content">
        <div className="service-item">
          <h3>Premium Car Rentals</h3>
          <p>Choose from a wide range of luxury and high-performance cars for your special occasions.</p>
        </div>
        <div className="service-item">
          <h3>24/7 Customer Support</h3>
          <p>Our dedicated team is available around the clock to assist you with any queries or issues.</p>
        </div>
        <div className="service-item">
          <h3>Flexible Booking Options</h3>
          <p>Enjoy flexible rental periods and convenient pick-up and drop-off locations.</p>
        </div>
      </div>
    </section>
  );
}
