
import { Intro, Description, Video, Footer, MainGallery, SolarSystem, ChatBots, } from '../../components/index.jsx'
import './Home.css'

const Home = () => {


  return (

    <div className='container-Home'>

      <div className="home-intro">

        <div className="d-flex justify-content-center align-items-center">
          <img className="home-rounded-image" src="https://raw.githubusercontent.com/hector1489/kaimanProject/main/src/assets/img/foto2.jpg" alt="foto2" />
        </div>

        <div className="home-section-text text-center">
          <div className="p-2">
            <h3 className="fw-bold text-center">
              "Desarrollador web <span className="text-info">fullStack</span><span className="text-warning">.</span>"
            </h3>
          </div>

          <div className="p-2">
            <h3> <i>Héctor González P </i><span className="text-warning">.</span></h3>
          </div>
        </div>
      </div>

      <div className='home-system-solar'>
        <SolarSystem />
      </div>

      <ChatBots />

    </div>


  );
}

export default Home