
const Intro = () => {
  return (
    <div className="container-intro animated-text-dos">
      <div className="intro-text">
        <div className="p-2">
          <h1 className="fw-bold">
          "Desarrollador web <span className="text-color-uno"> fullStack </span><span className="text-warning">.</span> "
          </h1>
        </div>
        <div className="p-2 fw-bold">
          <h3>Héctor González P <span className="text-warning">.</span></h3>
        </div>
      </div>
      <div className="flex-grow-1 d-flex justify-content-end align-items-center me-4">
        <img className="rounded-image" src="https://raw.githubusercontent.com/hector1489/kaimanProject/main/src/assets/img/foto2.jpg" alt="foto2" />
      </div>
    </div>
  )
}

export default Intro
