import { useState } from "react"
import { Form, Button} from "react-bootstrap"
import emailjs from "emailjs-com"

const Contacto = () => {
  const initialState = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a0x141h", "template_oi5ampe", e.target, "c4a3zcM5kTNKDmSEk")
      .then((res) => {
        console.log(res);
        alert("Mensaje enviado correctamente.");
        setFormData(initialState);
      })
      .catch((error) => {
        console.log(error);
        alert("Hubo un error en el envío del mensaje.");
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
    <Form className="container-form animated-text-dos" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-group bg-dark">
        <Form.Label className="container-fluid my-4 fw-bold text-white text-decoration-none text-uppercase">Contacto</Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-white text-decoration-none">Nombre</Form.Label>
          <Form.Control type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label className="text-white text-decoration-none">Dirección de correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="from_email" value={formData.from_email} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-white text-decoration-none">Escribe tu mensaje aquí:</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} required />
        </Form.Group>
        <Button className="btn css-button-gradient--5 fw-bold" type="submit">
        Enviar
      </Button>
        <ul className="text-white text-decoration-none">
          <li className="my-3"><span className="fw-bold me-3 text-warning">Mail :</span> g.p.hector.alejandro@gmail.com</li>
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
              <a className="social-icon ps-2" href="https://www.instagram.com/r3ptar.dev/" target="_blank" rel="noopener noreferrer">
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
