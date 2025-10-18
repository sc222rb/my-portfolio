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
                    <p>このプロジェクトは、サーバーサイドレンダリングを使用したWebアプリケーションで、三者間OAuth2フローを独自に実装しています。ユーザーはGitLabアカウントで安全にログインでき、Expressのセッション管理を用いてアクセストークンやユーザー情報を安全に保持します。また、GitLabのREST APIを利用してユーザーのプロフィール情報や最新活動を取得・表示したり、GraphQL APIで所属グループ内のプロジェクト情報や最新コミット情報を取得・表示できるようにしました。コードはモジュール化されており、保守性と拡張性があります。このプロジェクトを通じて、OAuth2の仕組みやRESTおよびGraphQL APIを用いたデータ取得・処理の技術を習得しました。<br />  
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