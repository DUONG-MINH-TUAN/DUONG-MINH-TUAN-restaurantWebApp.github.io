import React from "react";
import "./AboutUs.css"; // Import the CSS file for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-left">
          <div className="since-container">
            <span className="since-text">SINCE</span>
            <span className="year-text">1988</span>
          </div>
          <img
            src="restaurant.jpg" // Replace with the actual image URL
            alt="Restaurant"
            className="main-image"
          />
          <img
            src="chef.jpg" // Replace with the actual image URL
            alt="Chef preparing food"
            className="secondary-image"
          />
        </div>
        <div className="about-us-right">
          <h2 className="story-title">Our story</h2>
          <h1 className="story-heading">The beginning of TTT</h1>
          <p className="story-text">
            After years of working as a chef, Tuan decided to open her own
            restaurant, inspired by her grandmother’s recipes. She spent months
            perfecting the menu, finding local suppliers, and securing the
            necessary permits. With her savings, she rented a small, cozy space
            in town and carefully designed the dining area to feel like home.
          </p>
          <p className="contact-text">Book through call</p>
          <h3 className="phone-number">+08 08 777 888</h3>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
