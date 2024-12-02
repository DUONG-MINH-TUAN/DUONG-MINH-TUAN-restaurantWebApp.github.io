import React from "react";
import "./home.css";

function home() {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
        <nav className="navbar">
            <div className="logo">TTT</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menus">Menus</a></li>
                <li><a href="#pages">Pages</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="login-btn">Login/Sign up</button>
       </nav>


      {/* Hero Section */}
      <div id="home" className="hero-section">
        <div className="hero-content">
          <h1>Customer experience is our top priority</h1>
          <p>
            Where Each Plate Tells A Tale Of Culinary Expertise And Dedicated
            Artistry
          </p>
          <button className="order-btn">Order Now</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/400" // Replace with the actual chef image URL
            alt="Chef preparing a dish"
          />
        </div>
      </div>
    </div>
  );
}

export default home;
