import React, { useState, useEffect } from 'react';
import hoverSound from './sounds/frogsound.mp3'; 
import LogoAnimation from './LogoAnimation';
import Frog from "./img/Frog.png";
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import './App.css';



function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const calculateInitialPosition = () => {
    const imageWidth = 107;
    const imageHeight = 50;
    const initialX = (window.innerWidth - imageWidth) / 2 + 600;
    const initialY = (window.innerHeight - imageHeight) / 2;
    setPosition({ x: initialX, y: initialY });
  };


  useEffect(() => {
    calculateInitialPosition();
  }, []);

  const handleHover = () => {
    const imageWidth = 107;
    const imageHeight = 50;
    const maxX = window.innerWidth - imageWidth;
    const maxY = window.innerHeight - imageHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    setPosition({ x: randomX, y: randomY });

    if (!isHovered) {
      setIsHovered(true);
    }

    const audio = new Audio(hoverSound);
    audio.play();
  };

  return (
    <div className="app">
      <h1>Welcome To My Portfolio</h1>
      <div
        className="img-container"
        style={{ left: position.x, top: position.y }}
        onMouseEnter={handleHover}
      >
        <img id="random-image" className="random-image" src={Frog} width="107" height="50"/>
        {isHovered ? null : <div className="move-text">Click Me!</div>}
      </div>
      <LogoAnimation />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
