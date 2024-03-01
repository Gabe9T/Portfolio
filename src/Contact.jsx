import './Contact.css';
import emailIcon from './img/email.png';
import linkedinIcon from './img/linkedin.png'; 
import githubIcon from './img/github.png'; 

function Contact() {
  return (
    <div className="contact">
      <div>
        <h1>Contact Me</h1>
      </div>
      <a href="mailto:Gabrieltuckereze@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={emailIcon} alt="Email" />
      </a>
      <br />
      <a href="https://www.linkedin.com/in/gabrieltuckereze/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <br />
      <a href="https://github.com/Gabe9T" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
}

export default Contact;