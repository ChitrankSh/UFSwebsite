
import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  "https://th.bing.com/th/id/OIP.oiWtsToPyhziKuKvAAal3AHaI6?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  "https://i.pinimg.com/736x/03/10/63/0310639a9dd9aad1977b54ebfd0a9f1c.jpg",
  "https://i.pinimg.com/736x/eb/3f/db/eb3fdb149c642ab5d1ec28237b9be1be.jpg",
  "https://th.bing.com/th/id/OIP.t8nkSnRN5InXoukuPN29HAHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  "https://th.bing.com/th/id/OIP.HxzC65EXAqMOE5SNuQJYqwHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
  "https://i.pinimg.com/originals/fb/53/73/fb537375ce59dadaa38468370b0a0d9d.jpg",
  "https://i.pinimg.com/originals/1d/36/5d/1d365d96f963260076f4c1d88c769687.jpg",
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-wrapper">
        <div className="carousel-container">
          <div className="carousel-img left">
            <img src={images[prevIndex]} alt="left" />
          </div>
          <div className="carousel-img center">
            <img src={images[index]} alt="center" />
          </div>
          <div className="carousel-img right">
            <img src={images[nextIndex]} alt="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
