import './Description.css';
import cv from '../../assets/CV/Hector_Gonzalez_2026.pdf';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const skills = [
  { iconClass: 'fab fa-html5', title: 'HTML' },
  { iconClass: 'fab fa-css3-alt', title: 'CSS' },
  { iconClass: 'fab fa-bootstrap', title: 'Bootstrap' },
  { iconClass: 'fab fa-git-alt', title: 'Git' },
  { iconClass: 'fab fa-github', title: 'GitHub' },
  { iconClass: 'fas fa-cloud', title: 'Cloud' },
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
    <section id="About-me" className="container-description-wrapper container">
      <div className="description-flex-layout">
        
        <div className="actions-column animated-text-dos">
          <div className="glass-container border-neon-blue p-4 text-center">
            <p className="text-white m-0">
              Descarga mi <span className="text-neon-blue fw-bold">CV 2026</span> para conocer mi trayectoria técnica.
            </p>
            <a href={cv} download className="d-inline-block mt-3">
              <button className="css-button-neon-blue">Descargar CV</button>
            </a>
          </div>

          <div className="glass-container border-neon-green p-4 text-center">
            <p className="text-white mb-4">¿Quieres ver qué he construido o tienes una idea en mente?</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="css-button-neon-green" onClick={() => navigate('/projects')}>Proyectos</button>
              <button className="css-button-neon-blue" onClick={() => navigate('/contacts')}>Contacto</button>
            </div>
          </div>
        </div>

        <div className="skills-column animated-text-tres">
          <h4 className="title-skill text-neon-green mb-4 text-center text-lg-start">
            Tech Stack <span className="text-white">/</span>
          </h4>
          <div className="skills-grid">
            {skills.map((skill) => (
              <Skill key={skill.title} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Skill = ({ iconClass, title }) => (
  <div className="skill-card-item border-neon-blue" role="listitem">
    <i className={`${iconClass} skill-icon-neon`} aria-hidden="true"></i>
    <span className="skill-label-text">{title}</span>
  </div>
);

Skill.propTypes = {
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Description;