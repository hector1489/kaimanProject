import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import DataContext from "../../context/Datacontext"
import "./Cards.css"


const Cards = () => {
  const { data } = useContext(DataContext)
  const sliceData = data.slice(0, 14)

  return (
    <div className="cards-container">
      {sliceData.map((item) => (
        <Card key={item.image} className="card">
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <div className="container-card">
              <Card.Title className="card-title">{item.name}</Card.Title>
              <Card.Text className="card-text text-warning">{item.description}</Card.Text>
              <Link to={item.url} target="_blank">
                <Button className="btn css-button-gradient--5 fw-bold">GitHub</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Cards

