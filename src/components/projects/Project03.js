import { FaGithub } from 'react-icons/fa';
import projectImg3 from './../../img/project-img03.png';

function Project03 () {
    return (
        <div className="project-item">
            <div>
                <img src={projectImg3} alt="Project 3" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>This web app for data science visualizes historical beehive data using the MERN stack. It provides dynamic insights into hive health through interactive charts on bee activity, temperature, humidity, and hive weight, with features like data filters and responsive design.<br /> 
                    <b>Stack:</b> MongoDB, Node.js, React, Express.js, Plotly.js, Docker, Tailwind CSS, Git
                    </p>
                </div>
                <div className="project-link flex-row">
                    <a href="https://github.com/sc222rb/Web-for-Data-Sience" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                        <p>GitHub repo</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project03;