import React, { useState } from "react";
import "./Secretaries.css";

const allSecretaries = [
  { name: "Chitrank Singh Shekhawat", role: "Secretary", image: "/assets/ava.png" },
  { name: "Aditya Panwar", role: "Secretary", image: "/assets/noah.png" },
  { name: "Palak Meena", role: "Secretary", image: "/assets/liam.png" },
  { name: "Arisht Daiya", role: "Secretary", image: "/assets/emma.png" },
  { name: "Aadi Chhajed", role: "Secretary", image: "/assets/olivia.png" },
  { name: "Dwij Sukhadiya", role: "Secretary", image: "/assets/james.png" },
  { name: "Nikhil Beniwal", role: "Secretary", image: "/assets/james.png" },
  { name: "Rohan Singh", role: "Secretary", image: "/assets/james.png" },
  { name: "Deepak", role: "Secretary", image: "/assets/james.png" },
  { name: "Sejal Dubey", role: "Secretary", image: "/assets/james.png" },
  { name: "Dev", role: "Secretary", image: "/assets/james.png" },
  { name: "Yagnik Parmar", role: "Secretary", image: "/assets/james.png" },
];

const Secretaries = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSecretaries = showAll ? allSecretaries : allSecretaries.slice(0, 4);

  return (
    <section className="secretaries-section">
      <h2>Secretaries</h2>
      <div className="secretary-grid">
        {displayedSecretaries.map((sec, index) => (
          <div className="secretary-card" key={index}>
            <img src={sec.image} alt={sec.name} className="secretary-avatar" />
            <div className="secretary-info">
              <p className="secretary-name">{sec.name}</p>
              <p className="secretary-role">{sec.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="toggle-button-container">
        <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Secretaries;
