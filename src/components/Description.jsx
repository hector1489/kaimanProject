import cv from "../assets/CV/CV2.pdf"
const Description = () => {
  const cvFilePath = cv

  return (
    <div id="About-me" className="container-description d-flex flex-md-row flex-column">
      <div className="container-parrafoButton flex-grow-1 text-center text-md-left">
        <p className="container-p my-4 fw-bold text-white animated-text-dos">
          ¡Hola! Soy Héctor, un apasionado desarrollador web fullStack javaScript.
          Desde ya agradezco tu visita a mi portafolio, donde podrás explorar
          las tecnologías con las que he trabajado y ver mis proyectos.
          Si deseas conocerme mejor, puedes descargar mi <span className="text-color-uno">CV</span> haciendo
          clic en el botón " <span className="text-color-uno">Descargar CV</span> "
          debajo o acceder a mis perfiles sociales en la sección " <span className="text-color-uno">Contactos</span> ".
        </p>
        <a href={cvFilePath} download="Hector_Gonzalez Pastenes_Resume.pdf">
          <button className="btn css-button-gradient--5 fw-bold">Descargar CV</button>
        </a>
      </div>

      <div className="container-skills col-md-6">
        <h4 className="title-skill fw-bold my-4 animated-text-dos"> Skill<span className="text-warning"> :</span></h4>
        <div className="row justify-content-center animated-text-tres">
          <Skill iconClass="fab fa-html5 fa-2x mb-3" title="HTML" />
          <Skill iconClass="fab fa-css3-alt fa-2x mb-3" title="CSS" />
          <Skill iconClass="fab fa-bootstrap fa-2x mb-3" title="Bootstrap" />
          <Skill iconClass="fab fa-git-alt fa-2x mb-3" title="Git" />
          <Skill iconClass="fab fa-github fa-2x mb-3" title="GitHub" />
          <Skill iconClass="fas fa-cloud fa-2x mb-3" title="Cloud Computing" />
          <Skill iconClass="fab fa-sass fa-2x mb-3" title="Sass" />
          <Skill iconClass="fab fa-js fa-2x mb-3" title="JavaScript" />
          <Skill iconClass="fab fa-react fa-2x mb-3" title="React" />
          <Skill iconClass="fab fa-node fa-2x mb-3" title="Node.js" />
          <Skill iconClass="fas fa-database fa-2x mb-3" title="PostgreSQL" />
          <Skill iconClass="fas fa-key fa-2x mb-3" title="JWT" />
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
