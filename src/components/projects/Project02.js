import { FaGithub } from 'react-icons/fa';

function Project02 () {
    return (
        <div className="project-item">
            <div>
                <img src="./../img/project-img02.png" alt="Project 2" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>This is a HATEOAS-driven REST API that uses the HAL format for hypermedia and follows the MVC architectural pattern. It enables comprehensive monitoring of mobile beehive platforms, offering authenticated access to hive data such as humidity, temperature, weight, and bee flow. Farmers can manage their beehives, report honey harvests, and subscribe to harvest updates via notifications. The API uses a 2017 sensor dataset from Kaggle and stores the data in MongoDB, providing a reliable platform for tracking hive conditions and managing harvests.</p>
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
