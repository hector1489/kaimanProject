

const Projects = ({ name, image, description }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-dark">Ver en Github</button>
      </div>
    </div>
  )
}

export default Projects
