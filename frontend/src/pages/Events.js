import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../pages/Events.css';
import bg from '../assets/bg.mp4';

const Events = () => {
  const [eventsData, setEventsData] = useState({
    latestEvents: [],
    upcomingEvents: [],
    eventsByYear: {},
  });
  const [latestPage, setLatestPage] = useState(0);
  const [yearPage, setYearPage] = useState({ 2023: 0, 2022: 0 });
  const [selectedYear, setSelectedYear] = useState('2023');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const modalRef = useRef(null);

  const eventsPerPage = 6;

  useEffect(() => {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => {
        setEventsData({
          latestEvents: data.latestEvents.sort((a, b) => new Date(b.date) - new Date(a.date)),
          upcomingEvents: data.upcomingEvents,
          eventsByYear: data.eventsByYear,
        });
        setYearPage({ 2023: 0, 2022: 0, 2024: 0 });
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedEvent(null);
      }
    };

    if (selectedEvent) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedEvent]);

  const getPaginatedEvents = useMemo(() => {
    return (events, page) => {
      const start = page * eventsPerPage;
      return events.slice(start, start + eventsPerPage);
    };
  }, [eventsPerPage]);

  const handleNext = (type) => {
    if (type === 'latest') {
      setLatestPage((prev) => prev + 1);
    } else {
      setYearPage((prev) => ({ ...prev, [selectedYear]: prev[selectedYear] + 1 }));
    }
  };

  const handlePrev = (type) => {
    if (type === 'latest') {
      setLatestPage((prev) => prev - 1);
    } else {
      setYearPage((prev) => ({ ...prev, [selectedYear]: prev[selectedYear] - 1 }));
    }
  };

  const resolveImagePath = (path) => path;

  return (
    <div className={`events-container ${selectedEvent ? 'blurred' : ''}`}>
     {/* Background Video */}
     <video className="background-video" autoPlay loop muted playsInline>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      {/* Overlay Content */}
      <div className="content-overlay">
        <h1>Events</h1>

        {selectedEvent && (
          <div className="event-details-modal">
            <div className="modal-content" ref={modalRef}>
              <button className="back-arrow" onClick={() => setSelectedEvent(null)}>
                &larr; Back
              </button>
              <div className="event-details-content">
                <h2>{selectedEvent.title}</h2>
                <img
                  className="event-details-image"
                  src={resolveImagePath(selectedEvent.photo)}
                  alt={selectedEvent.title}
                  loading="lazy"
                />
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Hosted by:</strong> {selectedEvent.hostedBy}</p>
                <p><strong>Location:</strong> {selectedEvent.location}</p>
                <p>{selectedEvent.description}</p>
                {selectedEvent.additionalPhotos?.length > 0 && (
                  <div className="additional-photos">
                    <h3>Additional Photos</h3>
                    <div className="photos-grid">
                      {selectedEvent.additionalPhotos.map((photo, index) => (
                        <img
                          key={index}
                          className="additional-photo"
                          src={resolveImagePath(photo)}
                          alt={`Additional photo ${index + 1}`}
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Events Section */}
        <section className="upcoming-events-section">
          <h2>Upcoming Events</h2>
          {eventsData.upcomingEvents.length === 0 ? (
            <p className="no-events-message">No upcoming events available at the moment.</p>
          ) : (
            <div className="events-carousel">
              {eventsData.upcomingEvents.map((event) => (
                <div key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
                  <img src={resolveImagePath(event.photo)} alt={event.title} loading="lazy" />
                  <h3>{event.title}</h3>
                  <p>{event.shortDescription}</p>
                  <button className="register-button">Register</button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Latest Events Section */}
        <section className="latest-events-section">
          <h2>Latest Events</h2>
          <div className="events-carousel">
            {getPaginatedEvents(eventsData.latestEvents, latestPage).map((event) => (
              <div key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
                <img src={resolveImagePath(event.photo)} alt={event.title} loading="lazy" />
                <h3>{event.title}</h3>
                <p>{event.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="carousel-navigation">
            {latestPage > 0 && (
              <button onClick={() => handlePrev('latest')}>
                &larr;
              </button>
            )}
            {(latestPage + 1) * eventsPerPage < eventsData.latestEvents.length && (
              <button onClick={() => handleNext('latest')}>
                &rarr;
              </button>
            )}
          </div>
        </section>

        {/* Previous Events Section */}
        <section className="previous-events-section">
          <h2>Previous Events</h2>
          <div className="year-buttons">
            {Object.keys(eventsData.eventsByYear)
              .sort((a, b) => b - a) // Sort years in descending order
              .map((year) => (
                <button
                  key={year}
                  className={selectedYear === year ? 'active' : ''}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
          </div>

          <div className="events-carousel">
            {getPaginatedEvents(eventsData.eventsByYear[selectedYear] || [], yearPage[selectedYear]).map((event) => (
              <div key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
                <img src={resolveImagePath(event.photo)} alt={event.title} loading="lazy" />
                <h3>{event.title}</h3>
                <p>{event.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="carousel-navigation">
            {yearPage[selectedYear] > 0 && (
              <button onClick={() => handlePrev('previous')}>
                &larr;
              </button>
            )}
            {(yearPage[selectedYear] + 1) * eventsPerPage < (eventsData.eventsByYear[selectedYear] || []).length && (
              <button onClick={() => handleNext('previous')}>
                &rarr;
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
