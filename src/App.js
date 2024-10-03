// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Predictor from './components/Predictor';
import About from './components/About';
import './styles/navbar.css'; // Include Navbar styles
import './styles/predictor.css'; // Include Predictor styles
import './styles/about.css'; // Include About styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Predictor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
