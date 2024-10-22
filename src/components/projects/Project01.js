import { FaGithub } from 'react-icons/fa';

function Project01 () {
    return (
        <div className="project-item">
            <div>
                <img src="./../img/project-img01.png" alt="Project 1" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text left-centered">
                    <p>This Node.js application was designed to implement an OAuth2 access delegation system for a server-side rendered web app, where GitLab serves as the service provider. The OAuth2 flow is built from scratch, without using external libraries, allowing users to securely log in with their GitLab accounts hosted on gitlab.lnu.se.  
                    After authentication, users can view their GitLab profile information, recent activities, and details about projects and commits from their GitLab groups. The project integrates GitLab’s REST API and GraphQL API to fetch this data, providing a deep understanding of both OAuth2 and API consumption.</p>
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
