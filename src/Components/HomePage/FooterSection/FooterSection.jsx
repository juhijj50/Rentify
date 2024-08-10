import React from "react";
import "./FooterSection.css";

export default function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; 2024 Rentify</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
