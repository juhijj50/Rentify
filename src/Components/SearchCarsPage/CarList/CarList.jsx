import React from "react";
import "./CarList.css";
import Cards from "../../Cards/Cards";

export default function CarList() {

  const cars = [
    { id: 1, type: "Luxury", brand: "Brand 1", range: "0-50 miles", image: "/path/to/luxury-car.jpg" },
    { id: 2, type: "City", brand: "Brand 2", range: "50-100 miles", image: "/path/to/city-car.jpg" },
    { id: 3, type: "Van", brand: "Brand 3", range: "100-150 miles", image: "/path/to/van-car.jpg" },
  ];

  return (
    <div className="car-list">
      {cars.map(car => (
        <Cards key={car.id} car={car} />
      ))}
    </div>
  );
}
