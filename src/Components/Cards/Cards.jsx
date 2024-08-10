import React from "react";
import "./Cards.css";

export default function Cards({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={`${car.type} ${car.brand}`} className="car-image" />
      <div className="car-details">
        <h3>{car.type}</h3>
        <p>Brand: {car.brand}</p>
        <p>Range: {car.range}</p>
      </div>
    </div>
  );
}
