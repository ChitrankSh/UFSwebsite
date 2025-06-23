import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src\assets\FrisbeeRotation.png" alt="Frisbee Logo" />
        <h1>Ultimate Frisbee | IIT Kanpur</h1>
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#leaders">Leaders</a>
        <a href="#gallery">Gallery</a>
        <div className="dropdown">
          <button className="dropbtn">Secretaries</button>
          <div className="dropdown-content">
            <a href="#sec1">Sec 1</a>
            <a href="#sec2">Sec 2</a>
            <a href="#sec3">Sec 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
