import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataContext from "../../context/Datacontext";
import "./Cards.css";

const Cards = () => {
  const { data } = useContext(DataContext);
  // 1. Validar que los datos existan y sean un array
  const sliceData = data && Array.isArray(data) ? data.slice(0, 14) : [];

  return (
    <div className="cards-container">
      {sliceData.map((item) => (
        <Card key={item.image} className="card">
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <div className="container-card">
              <Card.Title className="card-title">{item.name}</Card.Title>
              <Card.Text className="card-text text-warning">{item.description}</Card.Text>
              {/* 2. Reemplazar Button por un <a> estilizado como botón */}
              <Link
                to={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn css-button-gradient--5 fw-bold"
              >
                GitHub
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;