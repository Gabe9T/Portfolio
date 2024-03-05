import './Contact.css';
import emailIcon from './img/email.png';
import linkedinIcon from './img/linkedin.png';
import githubIcon from './img/github.png';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <div className="icons">
        <a href="mailto:Gabrieltuckereze@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/gabrieltuckereze/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Gabe9T" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Contact;