import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-left">
        <ul className="contact-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#chefs">Our Chefs</a></li>
        </ul>
      </div>

      {/* Center Section */}
      <div className="contact-center">
        <div className="logo">TTT</div>
        <div className="business-info">
          <h3>Business Hours</h3>
          <p>Monday to Sunday</p>
          <p>4pm - 12am</p>
        </div>
        <div className="location-info">
          <h3>Location</h3>
          <p>99 Nguyen Van A Street, District 2</p>
          <p>Ho Chi Minh City</p>
        </div>
        <div className="reservation-info">
          <h3>Reservation</h3>
          <p>+08 08 777 888</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-right">
        <ul className="social-links">
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#youtube">Youtube</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
