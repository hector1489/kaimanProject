const Intro = () => {
    return (
      <div className="container-intro">
        <div className="d-flex flex-column align-items-center justify-content-center text-white">
          <div className="p-2 ms-4">
            <h1 className="fw-bold text-uppercase">Hector Gonzalez P.</h1>
          </div>
          <div className="p-2 ms-4">
            <h5 className="fw-bold">"La comprensión es una forma de éxtasis."</h5>
          </div>
        </div>
        <div className="flex-grow-1 d-flex justify-content-end align-items-center me-4">
          <img className="rounded-image" src="img/foto2.jpg" alt="foto2" />
        </div>
      </div>
    )
  }

  export default Intro
