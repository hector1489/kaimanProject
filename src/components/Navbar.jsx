import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Browser = () => {
  const setActiveClass = ({ isActive }) => {
    return isActive ? "text-warning text-decoration-none me-3" : "text-secondary text-decoration-none me-3";
  };

  return (
    <Navbar bg="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <div className="navbar-icon text-white text-decoration-none">
            <i className="fa-solid fa-user-astronaut fa-spin fa-2xl" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={setActiveClass}>Home</NavLink>
            <NavLink to="/viewsdescription" className={setActiveClass}>Description</NavLink>
            <NavLink to="/projects" className={setActiveClass}>Projects</NavLink>
            <NavLink to="/Contacts" className={setActiveClass}>Contacts</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Browser
