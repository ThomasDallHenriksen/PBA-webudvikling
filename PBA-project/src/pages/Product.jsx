import React from 'react';
import '../assets/global/breakpoints.scss'
import '../assets/main/font.scss'
import '../index.css'
import Carousel from '../components/Carousel'

const Product = () => {
    <div className="product-section-1"></div>
    const images = [
      'images/carousel/carousel1.png',
      'images/carousel/carousel2.png',
      'images/carousel/carousel3.png',
      // Add more image URLs as needed
    ];
  
    return (
      <div>
        <h1>Your Product</h1>
        <Carousel images={images} />
      </div>
    );
  };
  
  export default Product;