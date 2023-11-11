import Cards from "../components/Cards"

const Projects = () => {
  return (
    <div className="container-projects p-4">
      <h1 className="f-bold text-white text-center text-uppercase animated-text">
        Proyectos
      </h1>
      <div className="d-flex flex-wrap justify-content-around p-4">
        <Cards />
      </div>
    </div>
  )
}

export default Projects
