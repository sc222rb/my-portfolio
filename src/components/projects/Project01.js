import { FaGithub } from 'react-icons/fa';
import projectImg1 from './../../img/project-img01.png';

function Project01 () {
    return (
        <div className="project-item">
            <div>
                <img src={projectImg1} alt="Project 1" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>This HATEOAS-driven REST API in HAL format enables authenticated monitoring of mobile beehives, providing data on humidity, temperature, weight, and bee flow. Farmers can manage hives, report harvests, and receive notifications. Using a Kaggle sensor dataset stored in MongoDB, the API offers a reliable platform for tracking hive conditions and managing harvests.<br />  
                    <b>Stack:</b> Node.js, Express, EJS, GitLab API, OAuth2, REST API, GraphQL</p>
                </div>
                <div className="project-link flex-row">
                    <a href="https://github.com/sc222rb/oauth" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="github-icon" />
                        <p>GitHub repo</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project01;
