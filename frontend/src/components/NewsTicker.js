// src/components/NewsTicker.js
import React from 'react';
import './NewsTicker.css'; // Import the CSS for the ticker

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <div className="events-box">
        <h3>Upcoming Events</h3>
      </div>
      <div className="ticker-wrap">
        <div className="ticker-content">
          <p>
            Welcome to VJ Garuda Vigilance | Ensuring Digital Integrity | VNR VJIET Hyderabad | Latest Updates and Alerts 
            <button onClick={() => window.location.href='https://example.com'}>
              Learn More
            </button>
          </p>
          <p>
            Welcome to VJ Garuda Vigilance | Ensuring Digital Integrity | VNR VJIET Hyderabad | Latest Updates and Alerts 
            <button onClick={() => window.location.href='https://example.com'}>
              Learn More
            </button>
          </p>
          {/* Duplicate the same content for smooth looping */}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
