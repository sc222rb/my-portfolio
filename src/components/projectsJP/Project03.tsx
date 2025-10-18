import { FaGithub } from 'react-icons/fa';

const Project03: React.FC = () => {
    return (
        <div className="project-item">
            <div>
                <img src={`${process.env.PUBLIC_URL}/image/project-img03.png`} alt="Project 3" className="project-image" />
            </div>
            <div className="project-item2">
                <div className="project-text">
                    <p>MERNスタックを用いて、2拠点の養蜂場から収集された2017年から2019年までの約200万件の時系列データを統合管理・可視化するWebアプリケーションを開発しました。MongoDBのAggregation Pipelineを活用して1時間単位のデータ集約処理を実装し、APIのレスポンス時間を削減しました。また、hiveIdとtimestampの複合インデックスを用いることで検索性能を最適化し、RESTfulAPIをバージョニング対応で設計しました。さらに、KaggleAPIからのCSVデータを自動取得し、解析・バッチインサートする処理を構築するとともに、5か月間の欠損データに対しても適切に対応し、エラーが発生した場合のハンドリングも実装しました。 ユーザーインターフェースでは、日付範囲フィルターで選択した期間の蜜蜂の出入りや温度、湿度、巣箱の重量をPlotly.jsを用いたインタラクティブなチャートで表示し、複数の巣箱データを同時に比較分析することができます。養蜂家が一目で巣箱の状態を把握できる仕組みです。<br /> 
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