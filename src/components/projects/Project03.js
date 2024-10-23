import { FaGithub } from 'react-icons/fa';

function Project03 () {
    return (
        <div className="project-item">
            <div>
                <img src="./../img/project-img03.png" alt="Project 3" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>This project serves as a web application for data science, providing interactive visualizations of historical beehive data from Würzburg and Schwartau. Utilizing a classic MERN stack, it analyzes parameters such as bee arrivals and departures, temperature, humidity, and hive weight to offer insights into hive health and activity. Key features include dynamic visualizations, data filters, and responsive design. The project demonstrates the power of data visualization in understanding complex datasets and making informed decisions.
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