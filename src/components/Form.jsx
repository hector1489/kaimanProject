import { Form } from "react-bootstrap"

const Contacto = () => {
  return (
    <Form className="container-form">
      <Form.Group className="mb-3 form-group bg-dark">
        <Form.Label className="container-fluid my-5 fw-bold text-white text-decoration-none text-uppercase">Contacto :</Form.Label>
        <ul className="text-white text-decoration-none">
          <li><span className="fw-bold me-3">Mail:</span> g.p.hector.alejandro@gmail.com</li>
          <li><span className="fw-bold me-2">Fono:</span> +569-50882834</li>
        </ul>
        <div className="container-icon">
          <div className="col-12">
            <div className="fa-3x text-center color-dark">
              <a className="social-icon pe-2" href="https://github.com/hector1489" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon ps-2" href="https://www.linkedin.com/in/hector-gonzalez-6ab633256/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="social-icon ps-2" href="https://www.instagram.com/agratbatmalath/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  )
}

export default Contacto
