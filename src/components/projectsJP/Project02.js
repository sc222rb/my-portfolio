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
                    <p>HATEOASアプローチとMVCアーキテクチャパターンに基づき、このRESTAPIを構築しました。このAPIは湿度、温度、重量、蜜蜂の出入りに関するデータを提供し、農家が巣箱を管理し、収穫報告をしたり通知を受け取れるように設計されています。データは、Kaggleのセンサーデータを使用しMongoDBに保存しました。巣箱の状態の追跡や収穫管理を行うためのプラットフォームです。<br /> 
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