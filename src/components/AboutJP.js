import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileimage from './../img/profile.png';

function AboutJP() {
  return (
    <div className="about-container">
    <h3>ABOUT</h3>
      <div className="about-item">
        <div className="about-text text-justify">
          <p>👋ストックホルム在住のフルスタックエンジニア、SAYAKAです。2024年夏にスウェーデンの大学でWebプログラミング専攻でコンピュータサイエンスの学位を取得しました🎓。以前は、医療分野で長年働いていました。問題解決能力とクリエイティビティを活かせるエンジニアのお仕事に魅力を感じています。趣味はトレーニング、料理、旅行🛫です。</p>
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
