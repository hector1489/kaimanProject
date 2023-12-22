import { useRef, useEffect } from 'react'
import { Link } from "react-router-dom"

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
    <div>
      <div className='container-videos d-flex flex-column-reverse flex-md-row'>
      <div className='container-video col-md-6'>
        <video ref={videoRef} width="100%" height="100%" controls autoPlay muted>
          <source src="public/itDojoFull.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='container-parrafo-video col-md-6'>
        <p className='text-center text-warning fw-bold p-2 animated-text-tres'>
          Mi dedicación al perfeccionamiento de mis habilidades informáticas,
          me ha permitido desarrollar la capacidad de crear un solido e-commerce para mi proyecto final en Desafios Latam.
          En este puse a prueba mi adaptabilidad cambiando de javaSript a typeScript en las ultimas dos semanas.
          Tiene como objetivo principal guardar la informacion de los usuarios de forma segura y obtener los datos de sus
          productos favoritos del catologo puedes visitar la web y revisar la documentacion en los siguientes enlaces :
          <br />
          <Link className="text-color-uno"  to="https://frontend-svc7.onrender.com/" target="_blank">Web</Link>.
          <br />
          <Link className="text-color-uno"  to="https://github.com/hector1489/IT-Dojo" target="_blank">Documentacion</Link>.
        </p>

      </div>
    </div>

    </div>
  )
}

export default Videos
