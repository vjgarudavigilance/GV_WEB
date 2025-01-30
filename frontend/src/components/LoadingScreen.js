import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';
import eagleImage from '../assets/eagle-movement-bgless.gif'; // Replace with your eagle image path
//import eagleSound from '../assets/eagle-sound.mp3'; // Replace with your eagle sound path
import xlogo from '../assets/logo.jpg';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // const audio = document.getElementById('eagle-sound');
    // audio.play(); // Play eagle sound when the component is loaded

    // Hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null; // You can replace this with your next component when loading is done
  }

  return (
    <div className="loading-screen">
      <div className="eagle-container">
        <img src={eagleImage} alt="Eagle" className="eagle" />
        {/* <audio id="eagle-sound" src={eagleSound} preload="auto" hidden></audio> */}
      </div>
      <div className="text-container">
        <div className="logo-container">
          <img src={xlogo} alt="xlogo" className="xlogo" />
        </div>
        <h1 className="clubtag">VJ-Garuda Vigilance</h1>
        <p className="tags">VNR VJIET Hyderabad</p>
        <p className="tags">Guardians of Digital Integrity</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
