import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import DataContext from "../context/Datacontext"

const Cards = () => {
  const { data } = useContext(DataContext)

  return (
    <>
      {data.map((item, index) => (
        <Card key={item.image} className="card">
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <div className="container-card">
              <Card.Title className="card-title">{item.name}</Card.Title>
              <Card.Text className="card-text">{item.description}</Card.Text>
              <Link to={item.url} target="_blank">
                <Button variant="dark" className="card-button">GitHub</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Cards

