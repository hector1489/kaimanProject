import { useContext } from "react";
import DataContext from "../../context/Datacontext";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Projects.css';

const Projects = () => {
  const { data } = useContext(DataContext);
  
  const mainProjects = Array.isArray(data) ? data.slice(0, 14) : [];
  const templates = Array.isArray(data) ? data.slice(14, 16) : [];

  return (
    <div className="ProjectsView-container container">
      <section className="mt-5 animated-text">
        <h2 className="title-glass border-neon-purple text-center text-uppercase mb-5">
          Proyectos <span className="text-neon-purple">Portafolio</span>
        </h2>
        <div className="projects-grid">
          {mainProjects.map((item) => (
            <div key={item.image} className="animated-text-dos">
               <ProjectCard item={item} color="purple" />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5 pt-5 animated-text-tres">
        <h3 className="title-glass border-neon-green text-center mb-5">
          Open Source <span className="text-neon-green">Templates</span>
        </h3>
        <div className="projects-grid pb-5">
          {templates.map((item) => (
            <div key={item.image}>
              <ProjectCard item={item} color="green" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;