import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileimage from './../img/profile.png';

function About() {
  return (
    <div className="about-container">
    <h3>ABOUT</h3>
      <div className="about-item">
        <div className="about-text text-justify">
          <p>👋 Hi! I'm Sayaka, a fullstack developer based in Stockholm. In the summer of 2024, I graduated with a degree in Web Programming from a Swedish university 🎓. Now, I work remotely as a fullstack engineer for a Japanese company 💻. Outside of work, I enjoy staying active, cooking, and exploring new places ✈️!</p>
        </div>
        <img
          className="about-photo"
          src={profileimage}
          alt="Profile"
        />
      </div>
      <div className="icons-contact">
            <a href="https://www.linkedin.com/in/sayaka-chishiki-jakobsson-315830291/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" />
            </a>
            <a href="https://github.com/sc222rb" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github-icon" />
            </a>
      </div>
  </div>
  );
}

export default About;
