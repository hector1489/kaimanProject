import { useRef, useEffect } from 'react'
import video from '../../assets/video/itDojo-1.mp4'
import video2 from '../../assets/video/ADP.mp4'
import '../Video/Video.css'
import { Button } from 'react-bootstrap'

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
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Videos
