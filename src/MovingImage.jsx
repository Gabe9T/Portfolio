import React, { useState, useEffect } from 'react';
import hoverSound from './sounds/frogsound.mp3'; 
import Frog from "./img/Frog.png";
import './MovingImage.css';

const MovingImage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [initialPositionCalculated, setInitialPositionCalculated] = useState(false);

  useEffect(() => {
    calculateInitialPosition();
  }, []);

  const calculateInitialPosition = () => {
    const imageWidth = 107;
    const imageHeight = 50;
    const initialX = (window.innerWidth - imageWidth) / 2 + 600;
    const initialY = (window.innerHeight - imageHeight) / 2;
    setPosition({ x: initialX, y: initialY });
    setInitialPositionCalculated(true);
  };

  const handleHover = () => {
    if (!initialPositionCalculated) {
      return;
    }

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
    <div
      className="img-container"
      style={{ left: position.x, top: position.y }}
      onMouseEnter={handleHover}
    >
      <img id="random-image" className="random-image" src={Frog} alt="Frog" width="107" height="50"/>
      {isHovered ? null : <div className="move-text">Click Me!</div>}
    </div>
  );
}

export default MovingImage;