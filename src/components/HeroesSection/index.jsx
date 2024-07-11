import React from 'react';
import './styles.css';

function HeroSection() {
  return (
    <>
      <div className="hero">
        <div id="men-1">
          <img style={{ width: '270px', height: '380px' }} src=".\assets\image 2 28.png" alt="Man 1" />
        </div>
        <div>
          <div>
            <img src="./assets/images (5).png" alt="" />
          </div>
          <div className="ultimate">
            <span style={{ fontSize: '75px', color: '#484848' }}>ULTIMATE</span>
            <span id="sale" style={{ fontSize: '145px', paddingTop: '30px' }}>SALE</span>
            <span style={{ paddingTop: '20px', color: '#484848' }}>NEW COLLECTION</span>
            <span><button className="btn-hero">shop now</button></span>
          </div>
          <div>
            <img src=".\assets\images (6).png" alt="" />
          </div>
        </div>
        <div id="men-2">
          <img style={{ width: '250px', height: '400px' }} src=".\assets\image 227.png" alt="Man 2" />
        </div>
      </div>
      <div className="mark">
        <img src=".\assets\logo.png" alt="Logo 1" />
        <img src=".\assets\logo (1).png" alt="Logo 2" />
        <img src=".\assets\logo (2).png" alt="Logo 3" />
        <img src=".\assets\logo (3).png" alt="Logo 4" />
        <img src=".\assets\logo (4).png" alt="Logo 5" />
      </div>
    </>
  );
}

export default HeroSection;

