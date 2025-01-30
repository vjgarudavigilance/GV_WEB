import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details by ID
    fetch(`/events.json`) // Assuming the event details are still in the same file
      .then(response => response.json())
      .then(data => {
        const allEvents = [...data.latestEvents, ...data.eventsByYear['2023'], ...data.eventsByYear['2022']];
        const selectedEvent = allEvents.find(e => e.id === id); // Find the event by ID
        setEvent(selectedEvent);
      });
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-detail-container">
      <h1>{event.title}</h1>
      <img src={event.photo} alt={event.title} />
      <p>{event.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default EventDetail;
