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

      {/* Social Media Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/company/vj-garuda-vigilance/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"
            alt="LinkedIn"
            className="social-icon-img"
          />
        </a>
        <a
          href="https://www.instagram.com/vjgarudavigilance?igsh=MW9nd3hleTczY3h3YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
            alt="Instagram"
            className="social-icon-img"
          />
        </a>
      </div>

    </div>
  );
};

export default Home;
