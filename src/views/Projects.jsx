import Cards from "../components/Cards"

const Projects = () => {
  return (
    <div className="container-projects">
      <h1 className="f-bold text-white text-center">Projects : </h1>
      <div className="d-flex flex-wrap justify-content-around">
        <Cards />
      </div>
    </div>
  )
}

export default Projects
