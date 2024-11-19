import { Player } from '@lottiefiles/react-lottie-player'

function HomeJP() {
  return ( 
    <div className='Home'>
        <div className="home-item position">
          <Player 
            src="https://lottie.host/68805721-24af-40e4-8a4f-d7c727e8da2e/M40XIVzA4Y.json" 
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
            speed={1}/>
          <h2>I'M SAYAKA</h2>
          <h6>医療職からフルスタックエンジニアへ</h6>
        </div>
        <div className="arrow-container">
          <Player 
            src="https://lottie.host/3be1250f-e7dc-4106-a20a-c03b34d32621/81KXV2KgBF.json" 
            style={{ width: '100px', height: '100px' }}
            loop
            autoplay
            speed={1}
          />
        </div>
    </div>
  );
}

export default HomeJP;
