import cv from "../../assets/CV/HéctorGonzález2024.pdf"
import './Description.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Description = () => {
  const cvFilePath = cv

  const navigate = useNavigate()

  const handleGoToprojects = () => {
    navigate('/Projects')
  }

  const handleGoToContact = () => {
    navigate('/Contacts')
  }

  return (
    <div id="About-me" className="container-description d-flex flex-column flex-md-row justify-content-center p-1">
      <div className="d-flex flex-column gap-4">
        <div className="container-p d-flex flex-column text-center text-md-left mt-4 p-2">
          <p className="text-white ">
            Agradezco tu visita a mi portafolio aquí podrás explorar
            las tecnologías con las que he trabajado y conocer mis  proyectos.
            Si deseas obtener más información sobre mi trayectoria, puedes descargar mi <span className="text-color-uno fw-bold">CV</span> haciendo
            clic en el botón <span className="text-color-uno fw-bold">"Descargar CV"</span> <span className="text-warning">.</span>
          </p>
          <a href={cvFilePath} download="Hector_Gonzalez_CV.pdf">
            <button className="btn css-button-gradient--5 fw-bold">Descargar CV</button>
          </a>
        </div>

        <div className='container-project-home text-center mt-5 '>
          <p
            className='text-white m-2'
          >
            Además puedes ver mis proyectos en detalle y<span className='text-warning fw-bold'>/</span>o ponerte en contacto con migo  en <span className="text-warning fw-bold"> :</span>
          </p>
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

      <div className="col-md-6">
        <h4 className="title-skill fw-bold my-4 text-white "> Skills<span className="text-warning"> :</span></h4>
        <div className="container">
          <div className="row justify-content-center">
            <Skill iconClass="fab fa-html5 fa-2x text-warning mb-3" title="HTML" />
            <Skill iconClass="fab fa-css3-alt fa-2x mb-3 text-warning" title="CSS" />
            <Skill iconClass="fab fa-bootstrap fa-2x mb-3 text-warning" title="Bootstrap" />
            <Skill iconClass="fab fa-git-alt fa-2x mb-3 text-warning" title="Git" />
            <Skill iconClass="fab fa-github fa-2x mb-3 text-warning" title="GitHub" />
            <Skill iconClass="fas fa-cloud fa-2x mb-3 text-warning" title="Cloud Computing" />
            <Skill iconClass="fab fa-sass fa-2x mb-3 text-warning" title="Sass" />
            <Skill iconClass="fab fa-js fa-2x mb-3 text-warning" title="JavaScript" />
            <Skill iconClass="fab fa-react fa-2x mb-3 text-warning" title="React" />
            <Skill iconClass="fab fa-node fa-2x mb-3 text-warning" title="Node.js" />
            <Skill iconClass="fas fa-database fa-2x mb-3 text-warning" title="PostgreSQL" />
            <Skill iconClass="fas fa-key fa-2x mb-3 text-warning" title="JWT" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Skill = ({ iconClass, title }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="container-skill bg-dark p-2 rounded text-white">
        <i className={iconClass} />
        <h3 className="my-2 fw-bold" style={{ fontSize: '1rem' }}>{title}</h3>
      </div>
    </div>
  )
}


export default Description
