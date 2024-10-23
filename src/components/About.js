import profileimage from './../img/profile.png';

function About() {
  return (
      <div className="about-container">
          <h3>ABOUT</h3>
          <div className="about-item">
              <p>👋 Hi! I'm Sayaka, a passionate fullstack developer based in Stockholm, originally from Japan. I recently graduated from Linnaeus University 🎓 with a degree in Computer Science. With a background as an optician👓 and a mother of three, I bring a unique perspective to my work. In my free time, I enjoy exercising, cooking, and traveling ✈️!</p>
              <img
              className="about-photo"
              src={profileimage}
              alt="Profile"
              />
          </div>
      </div>
  );
}

export default About;
