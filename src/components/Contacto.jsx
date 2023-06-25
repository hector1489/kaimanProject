import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envía los datos del formulario al backend
    fetch('/enviar-correo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, correo, mensaje })
    })
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // Haz algo con la respuesta del backend, como mostrar un mensaje de éxito
      })
      .catch(error => {
        console.error('Error:', error);
        // Haz algo con el error, como mostrar un mensaje de error
      });
  };

  return (
    <>
      <section className="container-fluid my-5">
        <h3 className="display-4 fw-bold text-center my-4">Contacto</h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <form action="/enviar-correo" onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="mb-2">Nombre</label>
                <input
                  className="form-control"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={event => setNombre(event.target.value)}
                />
              </div>
              <div className="form-group mb-4">
                <label className="mb-2">Correo electrónico</label>
                <input
                  className="form-control"
                  placeholder="Correo electrónico"
                  value={correo}
                  onChange={event => setCorreo(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="mb-2">Escribe aquí tu mensaje</label>
                <textarea
                  className="form-control"
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={event => setMensaje(event.target.value)}
                ></textarea>
              </div>
              <div className="my-3 text-end">
                <button type="submit" className="btn btn-lg btn-dark text-light btn-outline-secondary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="row justify-content-center">
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
    </>
  );
};

export default Contacto;
