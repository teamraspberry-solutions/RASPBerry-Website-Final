import React, { useState } from 'react';
import './GallerySlider.css';

const GallerySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="gallery-slider">
      <div className="gallery-slider-container">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="gallery-image"
        />
      </div>
      <div className="gallery-slider-controls">
        <button className="gallery-slider-button prev" onClick={goToPrevious}>
          &lt;
        </button>
        <button className="gallery-slider-button next" onClick={goToNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GallerySlider;
