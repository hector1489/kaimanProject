
const Intro = () => {
  return (
    <div className="container-intro">
      <div className="intro-text">
        <div className="p-2">
          <h1 className="fw-bold"> "Desarrollador <span className="text-color-uno"> web </span> ." </h1>
        </div>
        <div className="p-2 fw-bold">
          <h5>Hector Gonzalez P.</h5>
        </div>
      </div>
      <div className="flex-grow-1 d-flex justify-content-end align-items-center me-4">
        <img className="rounded-image" src="img/foto2.jpg" alt="foto2" />
      </div>
    </div>
  )
}

export default Intro
