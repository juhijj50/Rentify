import React, { useState, useEffect } from "react";
import "./Filters.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cars1Img from "../../../assets/Slider/Car1.webp";
import Cars2Img from "../../../assets/Slider/Car2.webp";
import Cars3Img from "../../../assets/Slider/Car3.webp";
import Cars4Img from "../../../assets/Slider/Car4.webp";
import Cars5Img from "../../../assets/Slider/Car5.webp";
import Cars6Img from "../../../assets/Slider/Car6.webp";
import Cars7Img from "../../../assets/Slider/Car7.webp";
import Cars8Img from "../../../assets/Slider/Car8.jpeg";
import Cars9Img from "../../../assets/Slider/Car9.jpeg";
import AcIcon from "../../../assets/Slider/ac-icon.webp"; // Replace with actual icon paths
import PassengerIcon from "../../../assets/Slider/passenger-icon.png";
import Co2Icon from "../../../assets/Slider/co2-icon.png";

const allCars = [
  { img: Cars1Img, name: "Car 1", price: "$100/day", type: "luxury", range: "0-50", brand: "brand1", ac: true, passengers: 4, co2: "150g/km" },
  { img: Cars2Img, name: "Car 2", price: "$200/day", type: "city", range: "50-100", brand: "brand2", ac: false, passengers: 2, co2: "120g/km" },
  { img: Cars3Img, name: "Car 3", price: "$150/day", type: "van", range: "100-150", brand: "brand3", ac: true, passengers: 7, co2: "200g/km" },
  { img: Cars4Img, name: "Car 4", price: "$120/day", type: "luxury", range: "0-50", brand: "brand2", ac: true, passengers: 4, co2: "160g/km" },
  { img: Cars5Img, name: "Car 5", price: "$90/day", type: "city", range: "50-100", brand: "brand1", ac: false, passengers: 2, co2: "130g/km" },
  { img: Cars6Img, name: "Car 6", price: "$110/day", type: "van", range: "100-150", brand: "brand3", ac: true, passengers: 6, co2: "180g/km" },
  { img: Cars7Img, name: "Car 7", price: "$130/day", type: "luxury", range: "0-50", brand: "brand3", ac: false, passengers: 4, co2: "140g/km" },
  { img: Cars8Img, name: "Car 8", price: "$140/day", type: "city", range: "50-100", brand: "brand2", ac: true, passengers: 3, co2: "125g/km" },
  { img: Cars9Img, name: "Car 9", price: "$160/day", type: "van", range: "100-150", brand: "brand1", ac: false, passengers: 7, co2: "220g/km" },
];

const Filters = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedRange, setSelectedRange] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filteredCars, setFilteredCars] = useState(allCars);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const filtered = allCars.filter(car =>
      (selectedType ? car.type === selectedType : true) &&
      (selectedRange ? car.range === selectedRange : true) &&
      (selectedBrand ? car.brand === selectedBrand : true)
    );

    setFilteredCars(filtered);
    // Stop autoplay if any filter is applied
    if (selectedType || selectedRange || selectedBrand) {
      setAutoplay(false);
    }
  }, [selectedType, selectedRange, selectedBrand]);

  const sliderSettings = {
    dots: true,
    infinite: filteredCars.length > 4, // Enable infinite loop if more than 4 cars
    speed: 1000,
    slidesToShow: Math.min(filteredCars.length, 4), // Show fewer slides if less than 4 cars
    slidesToScroll: 1,
    autoplay: autoplay && filteredCars.length > 4, // Enable autoplay only if more than 4 cars
    autoplaySpeed: 2000,
  };

  return (
    <div className="filter-main">
      <div className="filters">
        <div className="filter-group">
          <label>Car Type:</label>
          <select onChange={(e) => setSelectedType(e.target.value)}>
            <option value="">All</option>
            <option value="luxury">Luxury</option>
            <option value="city">City</option>
            <option value="van">Van</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Car Range:</label>
          <select onChange={(e) => setSelectedRange(e.target.value)}>
            <option value="">All</option>
            <option value="0-50">0-50 miles</option>
            <option value="50-100">50-100 miles</option>
            <option value="100-150">100-150 miles</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Car Brand:</label>
          <select onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="">All</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            <option value="brand3">Brand 3</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Other Filters:</label>
          <select>
            <option value="">All</option>
            <option value="filter1">Filter 1</option>
            <option value="filter2">Filter 2</option>
            <option value="filter3">Filter 3</option>
          </select>
        </div>
      </div>
      <div className="slider-container">
        {filteredCars.length > 0 ? (
          <Slider {...sliderSettings}>
            {filteredCars.map((car, index) => (
              <div className="card" key={index}>
                <img src={car.img} alt={`${car.name} image`} className="slider-image" />
                <div className="card-details">
                  <span className="car-name">{car.name}</span>
                  <span className="car-price">{car.price}</span>
                  <div className="car-features">
                    {car.ac && <img src={AcIcon} alt="AC icon" className="feature-icon" />}
                    <img src={PassengerIcon} alt="Passenger icon" className="feature-icon" />
                    <span>{car.passengers}</span>
                    <img src={Co2Icon} alt="CO2 emission icon" className="feature-icon" />
                    <span>{car.co2}</span>
                  </div>
                  <button className="book-now-button">Book Now</button>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No cars available for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Filters;
