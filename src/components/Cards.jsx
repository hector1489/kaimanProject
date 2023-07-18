import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import DataContext from "../context/Datacontext"

const Cards = () => {
  const { data } = useContext(DataContext)

  return (
    <>
      {data.map((item) => (
        <Card style={{ width: '25rem' }} key={item.id} className="p-2">
          <Card.Img variant="top" src={item.image} />
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="dark">GitHub</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Cards
