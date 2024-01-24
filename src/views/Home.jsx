import { Button } from 'react-bootstrap'
import Intro from "../components/Intro"
import Description from "../components/Description"
import Videos from "../components/Videos"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleGoToprojects = () => {
    navigate('/Projects')
  }

  const handleGoToContact = () => {
    navigate('/Contacts')
  }

  return (
    <>
      <div className="p-4">
        <Intro />
      </div>

      <div className="container d-flex flex-column flex-md-row  mt-3 gap-5">

        <div className="container-project-home text-center fw-bold p-2">
          <p className='text-white'>
          <span className='text-warning'>¡Hola!</span> Soy un apasionado desarrollador web Full Stack especializado en JavaScript.
            Mi experiencia previa se ha centrado en el sector de la salud, colaborando durante 14 años como; técnico en enfermería,
            rescatista y despachador de rescates a nivel nacional.
            Además, he participado en proyectos freelance con la agrupación <span className='text-warning'>"Amigos del Puangue"</span>,
            desempeñándome como desarollador backend y director.
          </p>
        </div>

        <div className='container-project-home text-center'>
          <h5
            className='text-white fw-bold m-2'
          >
            Puedes echar un vistazo a mis proyectos y<span className='text-warning'>/</span>o ponerte en contacto con migo  en <span className="text-warning"> :</span>
          </h5>
          <div className='d-flex'>
            <Button
              className='css-button-gradient--5 fw-bold mb-2'
              onClick={handleGoToprojects}
            >
              Ir a Proyectos
            </Button>
            <Button
              className='css-button-gradient--5 fw-bold mb-2 mx-3'
              onClick={handleGoToContact}
            >
              Ir a Contacto
            </Button>
          </div>
        </div>
      </div>

      <div className="m-5">
        <Videos />
      </div>

      <div className="m-4">
        <Description />
      </div>

      <div className="container-arrow d-flex mt-4">
        <a href="#top" className="social-icon">
          <i className="fa-solid fa-angle-up fa-flip fa-2xl"></i>
        </a>
      </ div>
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}

export default Home