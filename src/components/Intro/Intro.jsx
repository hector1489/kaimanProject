import './Intro.css';

const Intro = () => {
  return (
    <section className="section-intro">
      <div className="d-flex flex-column justify-content-center gap-4">
        <div className="section-intro-text text-center">
          <div className="p-2">
            <h1 className="fw-bold text-center">
              Desarrollador web <span className="text-info">Full Stack</span>
              <span className="text-warning">.</span>
            </h1>
          </div>

          <div className="p-2">
            <h3>
              <i>Héctor González P</i>
              <span className="text-warning">.</span>
            </h3>
          </div>
        </div>

         <div className="d-flex flex-column flex-md-row mt-3">
          <div className="container-project-home text-center p-2">
            <p className="text-white">
              <span className="text-warning fw-bold">¡Hola!</span> Soy <span className="text-info fw-bold">Héctor González</span>, un desarrollador web Full Stack apasionado por construir soluciones digitales completas.
            </p>
            <p className="text-white mt-3">
              Actualmente, impulso el desarrollo web en{' '}
              <a 
                href="https://www.cocpcvi.cl/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                C.O.C. cvi.
              </a>
              , combinando esta labor con proyectos freelance y mi rol como director y desarrollador en la Agrupación Amigos del Puangue.
            </p>
            <p className="text-white mt-3">
              Mi enfoque es transformar ideas en aplicaciones funcionales y escalables.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <img
          className="rounded-image"
          src="https://raw.githubusercontent.com/hector1489/kaimanProject/main/src/assets/img/foto2.jpg"
          alt="Retrato de Héctor González"
        />
      </div>
    </section>
  );
};

export default Intro;
