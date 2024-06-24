import {React, useState} from "react";

const corousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${currentIndex * 149.2}px)` }} // Adjust the 120px as per your item width + margin
      >
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img.src} alt={img.alt} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="carousel-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default corousel;
