import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallary/Gallery';
import Achievements from './pages/Achievements/Achievements';
import Teams from './pages/Team/Team';
import Alumni from './pages/Alumni/Alumni';
import About from './pages/About';
import SocialIcons from './pages/Socialicons'; // Import the SocialIcons component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for the loading screen
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header /> {/* Always present at the top */}
          
          <main> {/* Main content appears below the header */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          
          <Footer /> {/* Footer will always appear at the bottom */}

          {/* Render social media icons globally */}
          <SocialIcons />
        </>
      )}
    </Router>
  );
}

export default App;
