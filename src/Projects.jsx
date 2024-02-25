import React from 'react';
import "./Projects.css";

import SoundCheck from "./img/SoundCheck.jpg";
import Haiku from "./img/Haiku.jpg";
import Coffee from "./img/Coffee.jpg";

const projects = [
    {
      id: 1,
      title: "Sound Check",
      description: "Sound Check enables users to search and save local bands, fostering community engagement.<br>Connect with fellow music enthusiasts to share experiences and recommendations.<br>Discover new bands and expand your musical horizons effortlessly.",
      technologies: "Technologies Used: Vite, React, JavaScript, Firebase, and MaterialUI.",
      link: "https://sound-check.netlify.app/",
      image: SoundCheck, 
    },
    {
      id: 2,
      title: "Haiku Checker",
      description: "Haiku Checker validates haikus for correct syllable structure and poetic form.<br>Offers a user-friendly interface for entering and checking haikus.<br>Generates random haikus with customizable parameters for creative exploration.",
      technologies: "Technologies Used: JavaScript, HTML, and CSS.",
      link: "https://github.com/Gabe9T/haiku-checker",
      image: Haiku, 
    },
    {
      id: 3,
      title: "Coffee Site",
      description: "Create, edit, and delete coffee roast entries effortlessly.<br>Seamlessly track the quantity of roast purchased for inventory management.",
      technologies: "Technologies Used: React, Vite, HTML, and JavaScript.",
      link: "https://github.com/Gabe9T/Coffee-business",
      image: Coffee, 
    },
  ];
  

const Projects = () => {
  return (
    <div className="projects">
        <h1> Projects </h1>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          
          <p dangerouslySetInnerHTML={{__html: project.description}}></p>
          <p>{project.technologies}</p>
          <a href={project.link} >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

