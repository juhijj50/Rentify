import React from 'react';
import './FeaturedCars.css';
import luxuryCar from "../../../assets/luxury-car.jpg";
import vanTruck from "../../../assets/van-truck.jpg";
import cityCar from "../../../assets/city-car.jpg";

export default function FeaturedCars() {
  return (
    <div className="featured-cars">
      <h2 className="section-title">Explore Our Fleet</h2>
      <p className="section-subtitle">Discover a variety of cars tailored to your needs.</p>

      <div className="car-types">
        <div className="car-type">
          <div className="car-info">
            <h3>Luxury</h3>
            <p>You can choose from a wide range of luxury vehicles made by legendary manufacturers.</p>
            <button className="btn btn-primary">See more</button>
          </div>
          <img src={luxuryCar} className="car-image" alt="Luxury Car"/>
        </div>
        
        <div className="car-type">
          <div className="car-info">
            <h3>Van & Truck</h3>
            <p>Looking for a van or 4x4 for your trip or a truck for your job?</p>
            <button className="btn btn-primary">See more</button>
          </div>
          <img src={vanTruck} className="car-image" alt="Van & Truck"/>
        </div>

        <div className="car-type">
          <div className="car-info">
            <h3>City Car</h3>
            <p>From compact and fuel-efficient city cars to eco-friendly models.</p>
            <button className="btn btn-primary">See more</button>
          </div>
          <img src={cityCar} className="car-image" alt="City Car"/>
        </div>
      </div>
    </div>
  );
}
