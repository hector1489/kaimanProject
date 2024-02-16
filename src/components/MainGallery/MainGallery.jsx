import { useContext } from "react"
import DataContext from "../../context/Datacontext"
import "./mainGallery.css"

const MainGallery = () => {
  const { data } = useContext(DataContext)

  return (
    <div className="carousel-gallery">
      <input type="radio" name="position" checked />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <main id="carousel">
        {data.map((item, index) => (
          <div key={index} className="item">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default MainGallery
