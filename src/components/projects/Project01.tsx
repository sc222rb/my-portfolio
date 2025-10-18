import { FaGithub } from 'react-icons/fa';

const Project01: React.FC = () => {
    return (
        <div className="project-item">
            <div>
                <a 
                    href="https://youtube.com/shorts/atAZkMVQim4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="video-thumbnail-wrapper"
                >
                    <img 
                        src="https://img.youtube.com/vi/atAZkMVQim4/maxresdefault.jpg"
                        alt="Project 1 Demo" 
                        className="project-image" 
                    />
                </a>
            </div>
            <div className="project-item2">
                <div className="project-text">
                    <p>This Node.js application was designed to implement an OAuth2 access delegation system for a server-side rendered web app, where GitLab serves as the service provider. The OAuth2 flow is built from scratch, without using external libraries, allowing users to securely log in with their GitLab accounts.<br />  
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
