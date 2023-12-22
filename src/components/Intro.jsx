
const Intro = () => {
  return (
    <div className="container-intro">
      <div className="intro-text animated-text-dos">
        <div className="p-2">
          <h1 className="fw-bold">
          "Desarrollador web <span className="text-color-uno"> fullStack </span><span className="text-warning">.</span> "
          </h1>
        </div>
        <div className="p-2 fw-bold">
          <h5>Hector Gonzalez P <span className="text-warning">.</span></h5>
        </div>
      </div>
      <div className="flex-grow-1 d-flex justify-content-end align-items-center me-4 animated-text-dos">
        <img className="rounded-image" src="./src/assets/img/foto2.jpg" alt="foto2" />
      </div>
    </div>
  )
}

export default Intro
