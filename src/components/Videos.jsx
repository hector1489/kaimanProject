import { useRef, useEffect } from 'react'

const Videos = () => {
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handlePlay)

    return () => {
      document.removeEventListener('click', handlePlay)
    }
  }, [])

  return (
      <div className='container-videos d-flex flex-column-reverse flex-md-row'>
        <div className='container-video col-md-6'>
          <video ref={videoRef} width="100%" height="100%" controls autoPlay muted>
            <source src="/img/Registo_socios -2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='container-parrafo-video col-md-6'>
          <p className='text-center text-warning fw-bold p-2 animated-text-tres'>
            Mi dedicación al perfeccionamiento de mis habilidades informáticas,
            a lo que coloquialmente llamo " <span className="text-color-uno">kung-fu informático</span> ",
            me ha permitido desarrollar la capacidad de crear una sólida base de datos.
            Esta base de datos tiene como objetivo principal almacenar información
            sobre los socios de la agrupación cultural con Personería ( <span className="text-color-uno">P.J. </span> )
            en la que desempeño roles tanto como director, como socio activo.
          </p>
        </div>
      </div>
  )
}

export default Videos
