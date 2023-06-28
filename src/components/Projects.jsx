

const Projects = ({ name, image, description, url}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
       <a href={url} className="btn btn-dark" target="_blank">Ver en Github</a>
      </div>
    </div>
  )
}

export default Projects
