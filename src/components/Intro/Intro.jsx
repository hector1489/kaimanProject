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
              <span className="text-warning fw-bold">¡Hola!</span> Soy un apasionado{' '}
              <span className="text-info fw-bold">desarrollador web Full Stack</span>. Actualmente
              me encuentro trabajando como desarrollador web Full Stack en{' '}
              <a
                href="https://www.fungilydev.cl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fungily Dev
              </a>. También cuento con experiencia en trabajos freelance para la Agrupación
              Amigos del Puangue, donde me desempeño como director y desarrollador web.
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
