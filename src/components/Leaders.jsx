import React from "react";
import "./Leaders.css";

const leadersData = [
  {
    name: "Yajath Parikh",
    image: "src/assets/ypL.jpg",
    contact: "pyajat23@iitk.ac.in"
  },
  {
    name: "Rohan Kumar",
    image: "src/assets/ypL.jpg",
    contact: "rohank23@iitk.ac.in",
   
  },
  {
    name: "Saikiran Banoth",
    image: "src/assets/ypL.jpg",
    contact: "bsaikiran22@iitk.ac.in",
  },
];

const Leaders = () => {
  return (
    <section id="leaders" className="leaders-section">
      <h1>Our Leaders</h1>
      <div className="leader-cards">
        {leadersData.map((leader, index) => (
          <div key={index} className="leader-card">
            <img src={leader.image} alt={leader.name} className="leader-img" />
            <h3>{leader.name}</h3>
            <p>{leader.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
