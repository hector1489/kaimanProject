import { Cards } from "../../components/index.jsx"
import './Projects.css'

const Projects = () => {
  return (
    <div className="container-projects p-4 animated-text-dos">
      <h2 className="f-bold text-white text-center text-uppercase">
        Proyectos
      </h2>
      <div className="d-flex flex-wrap justify-content-around p-4">
        <Cards />
      </div>
    </div>
  )
}

export default Projects
