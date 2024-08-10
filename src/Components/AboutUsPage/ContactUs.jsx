import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="contact-us">
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3><span class="material-symbols-outlined">
call
</span></h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h3><span class="material-symbols-outlined">
mail
</span></h3>
            <p>support@rentify.com</p>
          </div>
          <div className="contact-item">
            <h3><span class="material-symbols-outlined">
apartment
</span></h3>
            <p>1234 Car Rental Lane, Suite 100, City, State, 56789</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
