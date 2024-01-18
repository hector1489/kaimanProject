import { useRef, useEffect } from 'react'
import video from '../assets/video/itDojo-1.mp4'

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
    <div className='container-videos m-1'>
      <div className='d-flex flex-column-reverse flex-md-row'>
        <div className='container-video col-md-6'>
          <video ref={videoRef} width="100%" height="100%" controls autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className=' col-md-6'>
          <div className='container-parrafo-video d-flex flex-column justify-content-center'>
            <p className='text-center text-warning fw-bold p-2 animated-text-tres'>
              Mi dedicación al perfeccionamiento de mis habilidades informáticas,
              me ha permitido desarrollar la capacidad de crear un solido e-commerce para mi proyecto final en Desafios Latam.
              En este puse a prueba mi adaptabilidad cambiando de javaSript a typeScript en las ultimas dos semanas.
              Tiene como objetivo principal guardar la informacion de los usuarios de forma segura y obtener los datos de sus
              productos favoritos del catologo puedes visitar la web y revisar la documentación en los siguientes enlaces :
            </p>
            <div className='button-links-video d-flex flex-column justify-content-center align-items-center p-2'>
              <a className='btn css-button-gradient--5 text-color-uno' href='https://frontend-svc7.onrender.com/' target='_blank' rel='noopener noreferrer'>
                Web
              </a>
              <a className='btn css-button-gradient--5 text-color-uno' href='https://github.com/hector1489/IT-Dojo' target='_blank' rel='noopener noreferrer'>
                Documentación
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Videos
