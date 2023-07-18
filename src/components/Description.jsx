const Description = () => {
  return (
    <section id="About-me" className="container-fluid text-center my-5">
      <div className="row">
        <div className="col-12">
          <p className="my-4 fw-bold">
            Orientado al cliente y a la excelencia, cuento con una trayectoria de 14 años enfocada al sector de salud.
            Actualmente desarrollándome como front-end y como estudiante en Full Stack JavaScript para Desafios Latam.
            - technologies: sap / waypoint / html / css / bootstrap / git / github / cloud computing / sass / js / React.
          </p>
        </div>
      </div>

      <div className="section-container">
        <h4 className="my-4">Conocimientos en:</h4>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="bg-dark p-4 rounded text-white">
              <i className="fab fa-react fa-3x mb-3" />
              <h3 className="my-3 fw-bold">JS / React</h3>
              <p className="my-3">
                Curso Profesional de React / profesional de JavaScript.
                <br />
                Cursos impartidos por Codigo Facilito, tomados para ayudar en mi crecimiento y desarrollo.
                <br />
                A la vez que sigo en el bootcamp Full-stack de Desafio Latam. Siempre con ánimos de indagar más en la programación y aprender de aquellos que llevan tiempo.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-dark p-4 rounded text-white">
              <i className="fas fa-shuttle-space fa-3x mb-3" />
              <h3 className="my-3 fw-bold">Estudiante Full-stack en Desafios_Latam</h3>
              <p className="my-3">
                Actualmente, soy estudiante de desarrollo web Full-stack JavaScript en Desafios Latam.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-dark p-4 rounded text-white">
              <i className="fa-solid fa-truck-medical fa-3x mb-3" />
              <h3 className="my-3 fw-bold">Tens / Op</h3>
              <p className="my-3">
                14 años de carrera orientada al rescate, accidentes laborales y vehiculares.
                <br />
                Certificación de competencia teórica en Primeros Auxilios Psicológicos según protocolo PAP-ABCDE®, versión PAP-ABCDE®/200406, que organiza la Escuela de Medicina de la Pontificia Universidad Católica de Chile. Servicios sanitarios / Ciencias de la salud, general. BLS por otec ACHS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
