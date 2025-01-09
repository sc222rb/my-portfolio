import { FaGithub } from 'react-icons/fa';

const Project03: React.FC = () => {
    return (
        <div className="project-item">
            <div>
                <img src={`${process.env.PUBLIC_URL}/image/project-img03.png`} alt="Project 3" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text">
                    <p>MERNスタックを使用し、養蜂に関するビッグデータを可視化するデータサイエンス向けのWebアプリケーションを開発しました。データフィルターを活用して選択した期間の蜜蜂の出入り、温度、湿度、巣箱の重量などのデータをインタラクティブなチャートで表示し、巣箱の状態について一目で情報を得られるようにしています。<br /> 
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