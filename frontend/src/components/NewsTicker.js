import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './NewsTicker.css'; // Import the CSS for the ticker

const NewsTicker = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigateToEvents = () => {
    navigate('/events'); // Navigate to the Events page when clicked
  };

  return (
    <div className="news-ticker">
      <div className="events-box" onClick={handleNavigateToEvents} style={{ cursor: 'pointer' }}>
        <h3>Upcoming Events</h3>
      </div>
      <div className="ticker-wrap">
        <div className="ticker-content">
          <p>
            Welcome to VJ Garuda Vigilance | Ensuring Digital Integrity | VNR VJIET Hyderabad | Latest Updates and Alerts
            <button onClick={handleNavigateToEvents}>
              Learn More
            </button>
          </p>
          <p>
            Welcome to VJ Garuda Vigilance | Ensuring Digital Integrity | VNR VJIET Hyderabad | Latest Updates and Alerts
            <button onClick={handleNavigateToEvents}>
              Learn More
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
