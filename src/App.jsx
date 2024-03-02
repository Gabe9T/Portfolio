import React from 'react';
import MovingImage from './MovingImage';
import LogoAnimation from './LogoAnimation';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Welcome To My Portfolio</h1>
      <MovingImage />
      <LogoAnimation />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
