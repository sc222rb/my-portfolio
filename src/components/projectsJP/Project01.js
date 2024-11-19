import { FaGithub } from 'react-icons/fa';
import projectImg1 from './../../img/project-img01.png';

function Project01 () {
    return (
        <div className="project-item">
            <div>
                <img src={projectImg1} alt="Project 1" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text text-justify">
                    <p>このプロジェクトは、サーバーサイドレンダリングを使用したWebアプリケーションで、三者間OAuth2フローを実装しています。これにより、ユーザーはGitLabアカウントでログインでき、GitLabプロフィールからさまざまな情報にアクセスできるようになります。OAuth2フローは外部ライブラリを使用せずに一から構築しており、ユーザーがGitLabアカウントで安全にログインできるようになっています。<br />  
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