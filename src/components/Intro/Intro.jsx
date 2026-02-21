import './Intro.css';

const Intro = () => {
  return (
    <section className="section-intro container">
      <div className="row align-items-center justify-content-center w-100">
        
        <div className="col-12 col-lg-6 d-flex flex-column gap-4 animated-text-dos mb-5 mb-lg-0">
          <div className="section-intro-text text-center text-lg-start border-neon-blue">
            <div className="p-2">
              <h1 className="fw-bold main-title">
                Desarrollador Web <span className="text-neon-green">Full Stack</span>
              </h1>
            </div>
            <div className="p-2">
              <h3 className="name-subtitle italic">
                <i>Héctor González P</i><span className="text-neon-blue">_</span>
              </h3>
            </div>
          </div>

          <div className="container-intro-bio text-center text-lg-start p-4 border-neon-green">
            <p className="text-white m-0">
              <span className="text-neon-blue fw-bold">¡Hola!</span> Soy <span className="text-neon-green fw-bold">Héctor González</span>, apasionado por construir soluciones digitales completas.
            </p>
            <p className="text-white mt-3">
              Impulso el desarrollo en <a
                href="https://www.cocpcvi.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-link-green"
              >
                C.O.C. cvi
              </a> y lidero proyectos freelance con enfoque funcional y escalable.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center animated-text-tres">
          <div className="image-container-neon">
            <img
              className="rounded-image-fixed"
              src="https://raw.githubusercontent.com/hector1489/kaimanProject/main/src/assets/img/foto2.jpg"
              alt="Héctor González"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;