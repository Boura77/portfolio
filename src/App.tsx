import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import { generateStars } from './utils/stars';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();


  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    const container = document.getElementById('stars-container');
    if (container) {
      generateStars(container);

      const handleResize = () => generateStars(container);
      window.addEventListener('resize', handleResize);
      
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      
      <div className="App">
        <div className="stars-container" id="stars-container"></div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
      </div>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
