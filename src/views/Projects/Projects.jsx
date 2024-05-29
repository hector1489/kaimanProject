import { GalleryProject, MainList } from "../../components/index.jsx"
import './Projects.css'

const Projects = () => {
  return (
    <>
    <div className="container-projects p-4">
      <h2 className="f-bold text-white text-center text-uppercase">
        Proyectos
      </h2>
      <div className="d-flex flex-wrap justify-content-around p-4 animated-text-dos">
        <GalleryProject />
      </div>
    </div>
    <div className="container-projects p-4">
      <h3 className="f-bold text-white text-center">
        Plantillas para la comunidad dev <span className="text-warning fw-bold"> : </span>
      </h3>
      <div className="d-flex flex-wrap justify-content-around p-4 animated-text-dos">
        <MainList />
      </div>
    </div>
    </>
  )
}

export default Projects
