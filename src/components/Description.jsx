import cv from "../assets/CV/Hector_Gonzalez Pastenes_Resume_26-09-2023-10-49-48.pdf"
const Description = () => {
  const cvFilePath = cv

  return (
    <section id="About-me" className="container-description">
      <div>
        <p className="container-p my-4 fw-bold text-white" >
          Orientado al cliente y a la excelencia, cuento con una trayectoria de 14 años enfocada al sector de salud.
          Actualmente, me estoy desarrollando como front-end y soy estudiante de Full Stack JavaScript en Desafios Latam.
          Mis conocimientos incluyen las siguientes tecnologías: SAP, Waypoint, HTML, CSS, Bootstrap, Git, GitHub, Cloud Computing, Sass, JS, y React.
        </p>
        <a href={cvFilePath} download="Hector_Gonzalez Pastenes_Resume.pdf">
          <button className="btn btn-primary fw-bold">Descargar CV</button>
        </a>
      </div>

      <div className="section-container">
        <h4 className="fw-bold  my-4">Conocimientos en:</h4>
        <div className="row justify-content-center">
          <Skill
            iconClass="fab fa-react fa-3x mb-3"
            title="JS / React"
            description="Curso Profesional de React / profesional de JavaScript. Cursos impartidos por Codigo Facilito, tomados para ayudar en mi crecimiento y desarrollo. También, estoy en el bootcamp Full-stack de Desafio Latam, siempre con ánimos de indagar más en la programación y aprender de aquellos que llevan tiempo."
          />
          <Skill
            iconClass="fas fa-shuttle-space fa-3x mb-3"
            title="Estudiante Full-stack en Desafios_Latam"
            description="Actualmente, soy estudiante de desarrollo web Full-stack JavaScript en Desafios Latam."
          />
          <Skill
            iconClass="fa-solid fa-truck-medical fa-3x mb-3"
            title="Tens / Op"
            description="Tengo 14 años de experiencia en rescate, accidentes laborales y vehiculares. Cuento con certificación de competencia teórica en Primeros Auxilios Psicológicos según protocolo PAP-ABCDE®, versión PAP-ABCDE®/200406, que organiza la Escuela de Medicina de la Pontificia Universidad Católica de Chile. Además, tengo conocimientos en Servicios sanitarios / Ciencias de la salud, general, y poseo certificación BLS por Otec ACHS."
          />
        </div>
      </div>
    </section>
  )
}

const Skill = ({ iconClass, title, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="bg-dark p-4 rounded text-white">
        <i className={iconClass} />
        <h3 className="my-3 fw-bold">{title}</h3>
        <p className="my-3">{description}</p>
      </div>
    </div>
  )
}

export default Description
