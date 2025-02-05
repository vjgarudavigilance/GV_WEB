// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for Home
import Cube from '../components/Cube'; // Import the Cube component
import NewsTicker from '../components/NewsTicker'; // Import the NewsTicker component
import Carousel from '../components/Carousel'; // Import the Carousel component

const Home = () => {
  return (
    <div className="body">
      <div className="main-container">
        {/* Place the NewsTicker at the top */}
        <NewsTicker />

        {/* Wrap hero-section and Cube in a flex container */}
        <div className="content-container">
          <div className="hero-section">
            <h1 className="club-name">VJ Garuda Vigilance</h1>
            <p className="tagline">VNR VJIET Hyderabad</p>
            <p className="tagline">Guardians of Digital Integrity</p>
          </div>

          <div className="cube-container">
            <Cube /> {/* Include the Cube component */}
          </div>
        </div>
      </div>

      {/* Include the Carousel below the Cube */}
       {/* <Carousel />  */}
    </div>
  );
};

export default Home;
