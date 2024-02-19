import { useState, useContext } from "react"
import DataContext from "../../context/Datacontext"
import { Link } from 'react-router-dom'
import "./mainGallery.css"

const MainGallery = () => {
  const { data } = useContext(DataContext)
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePrev = () => {
    const index = (activeIndex === 0) ? data.length - 1 : activeIndex - 1
    setActiveIndex(index)
  }

  const handleNext = () => {
    const index = (activeIndex === data.length - 1) ? 0 : activeIndex + 1
    setActiveIndex(index)
  }

  return (
    <div className="main-gallery d-flex flex-column flex-md-row m-4">
      <div className="text-center text-white m-2">
        <h3>Puedes dar un vistazo rapido a mis proyectos <span className="text-warning"> :</span></h3>
        <p>o ver en detalle <Link to="/projects" className="fw-bold">aquí</Link></p>
      </div>
      <div className="m-2">
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            {data.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === activeIndex ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {data.map((item, index) => (
              <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                <img src={item.image} className="d-block w-100" alt={item.alt} />
                <div className="carousel-caption d-none d-md-block text-white fw-bold p-2">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            onClick={handlePrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            onClick={handleNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainGallery
