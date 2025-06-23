import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Us</h2>
      <p>
        Welcome to the Ultimate Frisbee Society of IIT Kanpur! We are a vibrant
        community of passionate players who enjoy playing, learning, and
        competing in ultimate frisbee. Join us for thrilling matches, training
        sessions, and national-level tournaments!
      </p>
    </section>
  );
};

export default AboutUs;export const leadersData = [
  {
    name: "Yajath Parikh",
    image: "src\assets\ypL.jpg",
    contact: "pyajat23@iitk.ac.in"
  },
  {
    name: "Rohan Kumar",
    image: "src\assets\ypL.jpg",
    contact: "rohank23@iitk.ac.in",
  },
  {
    name: "Saikiran Banoth",
    image: "src\assets\ypL.jpg",
    contact: "bsaikiran22@iitk.ac.in",
  },
];

