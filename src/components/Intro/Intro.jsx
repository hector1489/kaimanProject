import './Intro.css'

const Intro = () => {
  return (
    <div className="container-intro">
      <div className='d-flex flex-column justify-content-center gap-4'>
        <div className="container-intro-text text-center">
          <div className="p-2">
            <h1 className="fw-bold text-center">
              "Desarrollador web <span className="text-info"> fullStack </span><span className="text-warning">.</span> "
            </h1>
          </div>

          <div className="p-2">
            <h3>Héctor González P <span className="text-warning">.</span></h3>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row mt-3">
          <div className="container-project-home text-center p-2">
            <p className='text-white'>
              <span className='text-warning fw-bold'>¡Hola!</span> Soy un apasionado <span className='text-info fw-bold'>desarrollador web Full Stack.</span> Con
              experiencia en trabajos freelance para la Agrupación Amigos del Puangue donde me desenvuelvo
              como director y desarrollador web. Mis años previos están centrados en la salud con 14 años de carrera en
              en transporte, rescates y urgencias.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <img className="rounded-image" src="https://raw.githubusercontent.com/hector1489/kaimanProject/main/src/assets/img/foto2.jpg" alt="foto2" />
      </div>
    </div>
  )
}

export default Intro
