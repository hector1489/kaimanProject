import { useState, useRef } from "react";
import { Form, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import './ContactForm.css';

const ContactForm = () => {
  const formRef = useRef();
  const initialState = { from_name: "", from_email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "service_a0x141h", 
      "template_oi5ampe", 
      formRef.current, 
      "c4a3zcM5kTNKDmSEk"
    )
    .then(() => {
      setStatus("success");
      setFormData(initialState);
      setTimeout(() => setStatus(null), 5000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form-wrapper animated-text">
      <Form ref={formRef} className="contact-glass-form border-neon-purple" onSubmit={handleSubmit}>
        <h2 className="text-neon-purple text-uppercase fw-bold mb-4">Contacto</h2>
        
        <Form.Group className="mb-3 text-start">
          <Form.Label className="text-white-50 ms-2">Nombre</Form.Label>
          <Form.Control
            className="input-cyber"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3 text-start">
          <Form.Label className="text-white-50 ms-2">Email</Form.Label>
          <Form.Control
            className="input-cyber"
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            placeholder="nombre@ejemplo.com"
          />
        </Form.Group>

        <Form.Group className="mb-4 text-start">
          <Form.Label className="text-white-50 ms-2">Mensaje</Form.Label>
          <Form.Control
            className="input-cyber"
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="¿En qué puedo ayudarte?"
          />
        </Form.Group>

        {status && (
          <Alert variant={status === "success" ? "success" : status === "error" ? "danger" : "info"} className="py-2">
            {status === "sending" && "🚀 Transmitiendo datos..."}
            {status === "success" && "✅ Mensaje recibido en la base."}
            {status === "error" && "❌ Error en el enlace de datos."}
          </Alert>
        )}

        <button
          className="css-button-neon-purple w-100 mb-4"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
        </button>

        <div className="contact-footer pt-3 border-top border-secondary">
          <p className="text-white small">
            <span className="text-neon-green fw-bold">Email:</span> g.p.hector.alejandro@gmail.com
          </p>
          
          <div className="social-links-container fa-2xl">
            <a href="https://github.com/hector1489" target="_blank" rel="noopener noreferrer" className="social-link-cyber">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hector-gonzalez-6ab633256/" target="_blank" rel="noopener noreferrer" className="social-link-cyber">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/r3ptar.dev/" target="_blank" rel="noopener noreferrer" className="social-link-cyber">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;