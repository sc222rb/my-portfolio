import { FaGithub } from 'react-icons/fa';
import projectImg3 from './../../img/project-img03.png';

function Project03 () {
    return (
        <div className="project-item">
            <div>
                <img src={projectImg3} alt="Project 3" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text text-justify">
                    <p>MERNスタックを使用し、前述のプロジェクトと同じサイトから取得した養蜂に関するビッグデータを可視化するデータサイエンス向けのWebアプリケーションを開発しました。このアプリケーションでは、データフィルターを活用して選択した期間の蜜蜂の出入り、温度、湿度、巣箱の重量に関するインタラクティブなチャートを表示し、巣箱の状態について動的なインサイトを得られるようにしています。<br /> 
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