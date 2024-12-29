import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileimage from './../img/profile.png';

function AboutJP() {
  return (
    <div className="about-container">
    <h3>ABOUT</h3>
      <div className="about-item">
        <div className="about-text text-justify">
          <p>👋こんにちは、ストックホルム在住のSAYAKAです!2024年夏にスウェーデンの大学でWebプログラミング専攻の学位を取得し、現在はフルリモートで日本企業のフルスタックエンジニアとして働いています💻。趣味はトレーニング、料理、旅行🛫です。どうぞよろしくお願いします!</p>
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

export default AboutJP;
