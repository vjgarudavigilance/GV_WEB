// src/components/Cube.js
import React from 'react';
import './Cube.css'; // Ensure to import the CSS for the Cube
import logo from '../assets/logo.jpg'; // Import the logo image

const Cube = () => {
    return (
        <div className="cube">
            <div className="face face1" style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="face face2" style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="face face3" style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="face face4" style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="face face5" style={{ backgroundImage: `url(${logo})` }}></div>
            <div className="face face6" style={{ backgroundImage: `url(${logo})` }}></div>
        </div>
    );
};

export default Cube;

