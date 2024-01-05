import { Button } from 'react-bootstrap'
import Intro from "../components/Intro"
import Description from "../components/Description"
import Form from "../components/Form"
import Videos from "../components/Videos"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleGoToprojects = () => {
    navigate('/Projects')
  }


  return (
    <>
      <div className="mt-5">
        <Intro />
      </div>
      <div className="mt-2">
        <Description />
      </div>
      <div className="mt-2">
        <Videos />
      </div>
      <div className="mt-5">
        <div className='container-project-home'>
          <h5
          className='text-white fw-bold'
          >
          Puedes echar un vistazo a mis proyectos en <span className="text-warning"> :</span>
          </h5>
          <Button
            className='css-button-gradient--5 fw-bold mb-2'
            onClick={handleGoToprojects}
          >
            Ir a Proyectos
          </Button>
          </div>
      </div>

      <div className="mt-4">
        <Form />
      </div>
      <div className="container-arrow d-flex">
        <a href="#top" className="social-icon">
          <i className="fa-solid fa-angle-up fa-flip fa-2xl"></i>
        </a>
      </ div>
    </>
  );
}

export default Home