import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){
    return(
        <div className="main-container">
            <div className="Logo"><span>Rentify</span></div>
            <div className="Navigators">
            <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/book-car">
          <span>Reserve a Car</span>
        </Link>
        <Link to="/about-us">
          <span>About Us</span>
        </Link>
            </div>
        </div>
    );
}