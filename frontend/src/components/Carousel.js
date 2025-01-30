import React, { useState } from 'react';
import './Carousel.css';
import garudawelcome from '../assets/garudawelcome.jpg';
import ctfImage from '../assets/ctf.jpg';
import cyberGamesImage from '../assets/cyber_games.jpg';
import jntuImage from '../assets/jntu_pic_1.jpg';
import mindTreeImage from '../assets/jntu_pic_1.jpg';
import meetingImage from '../assets/jntu_pic_1.jpg';

const Carousel = () => {
  const [activeInfo, setActiveInfo] = useState(null);

  const images = [
    { src: garudawelcome, title: 'Garuda Welcome', description: 'Welcome to the Garuda event. Click to know more.' },
    { src: ctfImage, title: 'CTF Game', description: 'Capture the Flag (CTF) Game competition.' },
    { src: cyberGamesImage, title: 'Cyber Games', description: 'Cyber Games competition for tech enthusiasts.' },
    { src: jntuImage, title: 'JNTU Event', description: 'JNTU Event overview and highlights.' },
    { src: mindTreeImage, title: 'Mind Tree', description: 'LTI Mind Tree Tech Expo 2023.' },
    { src: meetingImage, title: 'Team Meeting', description: 'Meeting event overview and key points.' },
  ];

  const handleImageClick = (image) => {
    setActiveInfo(image);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Interactive Image Gallery</h2>
      <div className="carousel">
        <div className="carousel-rotation-direction">
          <ul className="carousel-item-wrapper" style={{ '--_num-elements': images.length }}>
            {images.map((image, index) => (
              <li
                key={index}
                className="carousel-item"
                style={{ '--_index': index + 1, '--_image-url': `url(${image.src})` }}
                onClick={() => handleImageClick(image)}
              >
                <a href={image.src} target="_blank" rel="noopener noreferrer">
                  {image.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {activeInfo && (
        <div className="image-info">
          <h3>{activeInfo.title}</h3>
          <p>{activeInfo.description}</p>
          <a href={activeInfo.src} target="_blank" rel="noopener noreferrer">View Full Image</a>
        </div>
      )}
    </div>
  );
};

export default Carousel;
