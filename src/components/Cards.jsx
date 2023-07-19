import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
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
            <Button variant="dark">GitHub</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Cards
