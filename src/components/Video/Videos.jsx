import { useRef, useEffect } from 'react'
import video from '../../assets/video/itDojo-1.mp4'
import video2 from '../../assets/video/ADP.mp4'
import '../Video/Video.css'

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
    <>
      <div className='container-videos m-4'>
        <div className='d-flex flex-column-reverse flex-md-row gap-2'>
          <div className='custom-video col-md-6'>
            <video ref={videoRef} width="100%" height="100%" controls autoPlay muted>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
          <div className=' col-md-6'>
            <div className='container-parrafo-video d-flex flex-column justify-content-center'>
              <p className='text-center text-warning p-2 mt-2'>
                Colaborando como Desarrollador Web y Director
                administrativo en la P.J. Amigos Del Puangue, desde 2017 al 2024
                he sido responsable de la continuidad operacional de los
                ambientes de Desarrollo y logística
                de servicios.
              </p>
              <div className='button-links-video d-flex flex-column justify-content-center align-items-center p-2'>
                <p className='text-center text-warning'>Con el espíritu de transparencia de la agrupación, puedes visitar su GitHub</p>
                <a className='btn css-button-gradient--5 text-color-uno' href='https://github.com/hector1489/ADP-Dos?tab=readme-ov-file' target='_blank' rel='noopener noreferrer'>
                  Documentación
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='container-videos m-4'>
        <div className='d-flex flex-column-reverse flex-md-row gap-2'>
          <div className='custom-video col-md-6'>
            <video ref={videoRef} width="100%" height="100%" controls autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className=' col-md-6'>
            <div className='container-parrafo-video d-flex flex-column justify-content-center'>
              <p className='text-center text-warning p-2 mt-2'>
                Mi dedicación me ha permitido desarrollar la capacidad de crear un solido e-commerce para mi proyecto final en Desafios Latam.
                Este tiene como objetivo principal guardar la informacion de los usuarios de forma segura y obtener los datos de sus
                productos favoritos del catologo, puedes visitar la documentación en el siguiente enlace :
              </p>
              <div className='button-links-video d-flex flex-column justify-content-center align-items-center p-2'>
                <a className='btn css-button-gradient--5 text-color-uno' href='https://github.com/hector1489/IT-Dojo' target='_blank' rel='noopener noreferrer'>
                  Documentación
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Videos
