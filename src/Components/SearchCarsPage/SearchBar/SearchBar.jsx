import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div>
      <h2 className="pink"><span className="book">Book</span> With Us Here</h2>
      <div className="search-bar">
        <div className="search-input">
          <label>Pickup Location:</label>
          <input type="text" placeholder="Enter pickup location" />
        </div>
        <div className="search-input">
          <label>Pickup Date:</label>
          <input type="date" />
        </div>
        <div className="search-input">
          <label>Dropoff Location:</label>
          <input type="text" placeholder="Enter dropoff location" />
        </div>
        <div className="search-input">
          <label>Dropoff Date:</label>
          <input type="date" />
        </div>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}
