import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import './Form.css';

const Contacto = () => {
  const initialState = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null); // Estado para la retroalimentación

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm("service_a0x141h", "template_oi5ampe", e.target, "c4a3zcM5kTNKDmSEk")
      .then((res) => {
        console.log(res);
        setStatus("success");
        setFormData(initialState);
        setTimeout(() => setStatus(null), 5000); // Ocultar mensaje después de 5s
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form className="container-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <Form.Label className="container-fluid my-4 fw-bold text-white text-decoration-none text-uppercase">Contacto</Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-white text-decoration-none">Nombre</Form.Label>
          <Form.Control
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label className="text-white text-decoration-none">Dirección de correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-white text-decoration-none">Escribe tu mensaje aquí:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {status === "sending" && <Alert variant="info">Enviando mensaje...</Alert>}
        {status === "success" && <Alert variant="success">Mensaje enviado correctamente.</Alert>}
        {status === "error" && <Alert variant="danger">Hubo un error en el envío. Por favor, inténtalo de nuevo.</Alert>}

        <Button
          className="btn css-button-gradient--5 fw-bold"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </Button>
        <div className="text-white text-decoration-none text-center">
          <p className="my-3"><span className="fw-bold me-3 text-warning">Mail :</span> g.p.hector.alejandro@gmail.com</p>
        </div>
        <div className="container-icon">
          <div className="col-12">
            <div className="fa-3x text-center color-dark">
              <a className="social-icon pe-2" href="https://github.com/hector1489" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-label="GitHub"></i>
              </a>
              <a className="social-icon p-2" href="https://www.linkedin.com/in/hector-gonzalez-6ab633256/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" aria-label="LinkedIn"></i>
              </a>
              <a className="social-icon ps-2" href="https://www.instagram.com/r3ptar.dev/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" aria-label="Instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Contacto;