import './Description.css';
import cv from '../../assets/CV/Hector_Gonzalez_2026.pdf';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const skills = [
  { iconClass: 'fab fa-html5', title: 'HTML' },
  { iconClass: 'fab fa-css3-alt', title: 'CSS' },
  { iconClass: 'fab fa-bootstrap', title: 'Bootstrap' },
  { iconClass: 'fab fa-git-alt', title: 'Git' },
  { iconClass: 'fab fa-github', title: 'GitHub' },
  { iconClass: 'fas fa-cloud', title: 'Cloud Computing' },
  { iconClass: 'fab fa-sass', title: 'Sass' },
  { iconClass: 'fab fa-js', title: 'JavaScript' },
  { iconClass: 'fab fa-react', title: 'React' },
  { iconClass: 'fab fa-node', title: 'Node.js' },
  { iconClass: 'fas fa-database', title: 'PostgreSQL' },
  { iconClass: 'fas fa-key', title: 'JWT' },
  { iconClass: 'fab fa-aws', title: 'AWS' }
];

const Description = () => {
  const navigate = useNavigate();

  return (
    <div id="About-me" className="container-description d-flex flex-column flex-md-row justify-content-center">
      <div className="d-flex flex-column gap-4">
        <div className="container-p d-flex flex-column text-center text-md-left mt-4 p-2">
          <p className="text-white">
            Si deseas obtener más información sobre mi trayectoria, puedes descargar mi{' '}
            <span className="text-info fw-bold">CV</span> haciendo clic en el botón{' '}
            <span className="text-info fw-bold">Descargar CV</span>
            <span className="text-warning">.</span>
          </p>
          <a href={cv} download="Hector_Gonzalez_CV.pdf" className="d-inline-block" rel="noopener noreferrer">
            <button className="btn css-button-gradient--5 fw-bold">Descargar CV</button>
          </a>
        </div>

        <div className="container-project-home text-center mt-5">
          <p className="text-white m-2">
            Además, puedes ver mis proyectos en detalle y/o ponerte en contacto conmigo
            <span className="text-warning fw-bold">:</span>
          </p>
          <div className="d-flex flex-wrap gap-3 m-2 justify-content-center">
            <Button className="css-button-gradient--5 fw-bold" onClick={() => navigate('/Projects')}>
              Proyectos
            </Button>
            <Button className="css-button-gradient--5 fw-bold" onClick={() => navigate('/Contacts')}>
              Contacto
            </Button>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4 className="title-skill fw-bold my-4 text-white">
          Skills<span className="text-warning">:</span>
        </h4>
        <div className="container">
          <div className="row justify-content-center">
            {skills.map((skill) => (
              <Skill key={skill.title} iconClass={skill.iconClass} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skill = ({ iconClass, title }) => (
  <div className="col-md-4 mb-4">
    <div className="container-skill bg-dark p-2 rounded text-white d-flex flex-column align-items-center"
      role="listitem"
      aria-label={title}
    >
      <i className={`${iconClass} text-warning`} aria-hidden="true" title={title}></i>
      <h3 className="my-2 fw-bold" style={{ fontSize: '1rem' }}>{title}</h3>
    </div>
  </div>
);

Skill.propTypes = {
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Description;