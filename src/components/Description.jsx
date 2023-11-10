import cv from "../assets/CV/Hector_Gonzalez Pastenes_Resume_26-09-2023-10-49-48.pdf"
const Description = () => {
  const cvFilePath = cv

  return (
    <section id="About-me" className="container-description d-flex flex-md-row flex-column">
      <div className="container-parrafoButton flex-grow-1 text-center text-md-left">
        <p className="container-p my-4 fw-bold text-white">
          ¡Hola! Mi nombre es Héctor y soy desarrollador web, desde ya te doy las gracias por visitar mi portafolio.
          Aquí podrás ver las tecnologías con las que he trabajado y mis proyectos. Si te interesa conocerme un poco más,
          puedes descargar mi <span className="text-color-uno"> CV  </span>  haciendo clic en el botón inferior "  <span className="text-color-uno"> Descargar CV  </span> " o haciendo clic en los iconos sociales
          en la sección de " <span className="text-color-uno"> Contacts  </span>  ".
        </p>

        <a href={cvFilePath} download="Hector_Gonzalez Pastenes_Resume.pdf">
          <button className="btn css-button-gradient--5 fw-bold">Descargar CV</button>
        </a>

      </div>

      <div className="container-skills col-md-6">
        <h4 className="title-skill fw-bold my-4"> Skill :</h4>
        <div className="row justify-content-center">
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
    </section>
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
