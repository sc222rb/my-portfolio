import arrowImg from './../img/down-arrow.png';

function Home() {
  return ( 
    <div className='Home'>
        <div className="home-item position">
            <h2>HI! I'M SAYAKA</h2>
            <h6>Fullstack Developer with a background in healthcare</h6>
        </div>
        <div className="arrow-container">
          <img src={arrowImg} alt="Animated arrow" className="arrow" />
        </div>
    </div>
  );
}

export default Home;
