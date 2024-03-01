import React, { useEffect } from 'react';
import './LogoAnimation.css';

const LogoAnimation = () => {
  useEffect(() => {
    const span = document.querySelector(".animated-span");
    const textContent = span.textContent;

    span.textContent = "";

    textContent.split("").map((letter, index) => {
      const spanForLetter = document.createElement("span");

      spanForLetter.textContent = letter;

      const delay = `-${index * (4000 / 16)}ms`;

      spanForLetter.style.animationDelay = delay;
      span.appendChild(spanForLetter);
    });

    const span2 = document.querySelector(".animated-span-2");
    const textContent2 = span2.textContent;

    span2.textContent = "";

    textContent2.split("").map((letter, index) => {
      const spanForLetter2 = document.createElement("span");

      spanForLetter2.textContent = letter;

      const delay = `-${index * (4000 / 16) + 2200}ms`;

      spanForLetter2.style.animationDelay = delay;
      span2.appendChild(spanForLetter2);
    });
  }, []);

  return (
    <div className="header">
      <span className="animated-span-2">Gabriel Engineer Software Tucker</span>
      <span className="animated-span">Software Tucker Gabriel Engineer </span>
      </div>
  );
};

export default LogoAnimation;