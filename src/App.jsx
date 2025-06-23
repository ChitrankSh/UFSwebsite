// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import FrisbeeAnimation from "./components/FrisbeeAnimation";
import AboutUs from "./components/AboutUs";
import Leaders from "./components/Leaders";
import Secretaries from "./components/Secretaries";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrisbeeAnimation />
      <AboutUs />
      <Leaders />
       <Secretaries /> 
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
