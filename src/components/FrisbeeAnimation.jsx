import React, { useEffect, useState } from "react";
import "./FrisbeeAnimation.css";

const FrisbeeAnimation = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`frisbee-container ${hide ? "hide" : ""}`}>
      <img src="src\assets\FrisbeeRotation.png" alt="Frisbee" className="frisbee" />
    </div>
  );
};

export default FrisbeeAnimation;
