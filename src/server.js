const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Configura el transporter de Nodemailer con tus credenciales de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'g.p.hector.alejandro@gmail.com',
    pass: 'kUki0907'
  }
});

// Ruta para manejar la solicitud POST del formulario de contacto
app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  // Configura el correo electrónico que se enviará
  const mailOptions = {
    from: 'g.p.hector.alejandro@gmail.com',
    to: 'g.p.hector.alejandro@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${nombre}\nCorreo electrónico: ${correo}\nMensaje: ${mensaje}`
  };

  // Envía el correo electrónico utilizando el transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
