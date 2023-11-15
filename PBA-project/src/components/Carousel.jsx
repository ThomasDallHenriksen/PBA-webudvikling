import React, { useState } from 'react';
import '../assets/styles/carousel.scss';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="carousel">
      <div className="main-image">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div className="preview-images">
        <button className="arrow left" onClick={handlePrev}>&#8249;</button>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentImageIndex ? 'active' : ''}
            />
            ))}
            <button className="arrow right" onClick={handleNext}>&#8250;</button>
      </div>
    </div>
  );
};

export default Carousel;