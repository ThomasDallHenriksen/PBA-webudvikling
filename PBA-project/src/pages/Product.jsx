import React from 'react';
import '../assets/global/breakpoints.scss'
import '../assets/main/font.scss'
import '../assets/styles/product.scss'
import Carousel from '../components/Carousel'

const Product = () => {
    const images = [
        'images/carousel/carousel1.png',
        'images/carousel/carousel2.png',
        'images/carousel/carousel3.png'
    ];

    return (
        <div className="product">
            <div className="product-section-1">
                <div className='drone-carousel'>
                    <Carousel images={images} />
                </div>
                <div className="demo-description">
                    <h1 className='titletop'>Airplate</h1>
                    <h3>299€</h3>
                    <p> The Airplate is a small, self-contained solution to tagging and tracking
                        your drones and arial devices, consisting of a single unit with a volume
                        of less than 51 cm3 and weighs less than 58 grams(battery included). It
                        can be retrofitted onto existing drones or inplemented during
                        production. It can be charged through USB-C and has 2+ hrs of battery
                        operation from a single full charge. It can also be integrated without
                        battery, directly powered from the drone with 5 V.
                        <br /><br />-Easy configuration
                        <br /><br />-Compatible with any drone
                    </p>
                </div>
                <div className='mobile-drone-carousel'>
                    <Carousel images={images} />
                </div>
            </div>
        </div>


    );
};

export default Product;