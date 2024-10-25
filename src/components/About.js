import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import profileimage from './../img/profile.png';

function About() {
  return (
    <div className="about-container">
    <h3>ABOUT</h3>
      <div className="about-item">
        <div className="about-text text-justify">
          <p>👋 Hi! I'm Sayaka, a passionate fullstack developer based in Stockholm, originally from Japan. I recently graduated from Linnaeus University 🎓 with a degree in Computer Science. With a background as an optician👓 and a mother of three, I bring a unique perspective to my work. In my free time, I enjoy exercising, cooking, and traveling ✈️!</p>
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
