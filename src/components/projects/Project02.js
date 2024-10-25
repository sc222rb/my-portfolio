import { FaGithub } from 'react-icons/fa';
import projectImg2 from './../../img/project-img02.png';

function Project02 () {
    return (
        <div className="project-item">
            <div>
                <img src={projectImg2} alt="Project 2" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text text-justify">
                    <p>This HATEOAS-driven REST API in HAL format enables authenticated monitoring of mobile beehives, providing data on humidity, temperature, weight, and bee flow. Farmers can manage hives, report harvests, and receive notifications. Using a Kaggle sensor dataset stored in MongoDB, the API offers a reliable platform for tracking hive conditions and managing harvests.<br /> 
                    <b>Stack:</b> Node.js, Express.js, MongoDB, REST API, HATEOAS, Docker, Git, Swagger, Postman, Webhook
                    </p>
                </div>
                <div className="project-link flex-row">
                    <a href="https://github.com/sc222rb/beehive" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                        <p>GitHub repo</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project02;
