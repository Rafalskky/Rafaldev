import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import MyProjects from './pages/my-projects.js';



import Footer from './components/Footer.js';
import Menu from './components/Menu.js';

import './styles/App.sass';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
