import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className='home-container d-flex flex-column align-items-center'>
      <section className="home-hero d-flex flex-column align-items-center justify-content-center">
        <div className="home-content-wrapper text-center">
          
          <div className="home-logo-container mb-4 animate-fade-in-up">
            <img
              className="home-avatar border-neon-blue"
              src="https://raw.githubusercontent.com/hector1489/kaimanProject/refs/heads/main/src/assets/img/logo_reptar_2025.png"
              alt="REPTAR Hector Gonzalez"
            />
          </div>

          <div className="home-text-block">
            <div className="animate-fade-in-up delay-1">
              <h1 className="home-main-title fw-bold">
                Desarrollador Web <span className="text-neon-green">FullStack</span><span className="text-neon-blue">.</span>
              </h1>
            </div>

            <div className="animate-fade-in-up delay-2">
              <h2 className="home-subtitle italic"> 
                <i>Héctor González P</i><span className="text-neon-green">_</span>
              </h2>
            </div>
            
            <div className="mt-5 animate-fade-in-up delay-3">
              <button 
                className="css-button-neon-green"
                onClick={() => navigate('/projects')}
                aria-label="Ir a la sección de proyectos"
              >
                EXPLORAR PROYECTOS
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features container animate-fade-in-up delay-4">
        <div className="row g-4 justify-content-center">
          <FeatureCard icon="fa-code" title="Arquitectura" color="blue" />
          <FeatureCard icon="fa-rocket" title="Velocidad" color="green" />
          <FeatureCard icon="fa-terminal" title="Escalabilidad" color="blue" />
        </div>
      </section>
    </main>
  );
}

const FeatureCard = ({ icon, title, color }) => (
  <div className="col-6 col-md-3">
    <div className={`feature-card border-neon-${color}`}>
      <i className={`fas ${icon} mb-2 text-neon-${color}`}></i>
      <p className="m-0 small fw-bold">{title}</p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['blue', 'green']).isRequired,
};

export default Home;