import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import DataContext from "../context/Datacontext"

const Cards = () => {
  const { data } = useContext(DataContext)

  return (
    <>
      {data.map((item) => (
        <Card
          key={item.id}
          className="p-2"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <Card.Body>
            <div className="container-card">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Link to={item.url} target="_blank">
                <Button variant="dark">GitHub</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Cards
