import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProjectCard = ({ item, color = "purple" }) => {
  const borderClass = color === "green" ? "border-neon-green" : "border-neon-purple";
  const buttonClass = color === "green" ? "css-button-neon-green" : "css-button-neon-purple";

  return (
    <Card className={`project-card-custom ${borderClass} h-100`}>
      <div className="card-img-container">
        <Card.Img variant="top" src={item.image} alt={item.name} />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="text-white fw-bold">{item.name}</Card.Title>
          <Card.Text className="text-neon-green small mb-3">
            {item.description}
          </Card.Text>
        </div>
        <Link
          to={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} text-decoration-none d-flex align-items-center justify-content-center`}
        >
          <i className="fa fa-up-right-from-square"></i>
        </Link>
      </Card.Body>
    </Card>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.object.isRequired,
  color: PropTypes.string
};

export default ProjectCard;