import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import lofi from "../../assets/audio/lofi.mp3"
import './Navbar.css'

const Browser = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)

  const setActiveClass = ({ isActive }) => {
    return isActive
      ? "text-warning text-decoration-none me-3 fw-bold"
      : "text-secondary text-decoration-none me-3"
  }

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying)
  }

  useEffect(() => {
    const audioElement = document.getElementById("audioPlayer")

    if (isAudioPlaying) {
      audioElement.play()
    } else {
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }, [isAudioPlaying])

  return (
    <Navbar className="container-navbar" expand="md" fixed="top">

      <Container>

        <Navbar.Brand>
          <div className="navbar-icon text-white text-decoration-none">
            <button onClick={toggleAudio} className='button-icon-astro'>
              <i className={`fa-solid fa-user-astronaut fa-2xl ${isAudioPlaying ? 'playing' : 'paused'}`} />
            </button>
          </div>
          <audio id="audioPlayer" src={lofi} loop>
          </audio>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="burguer-button" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ms-auto">
            <NavLink to="/" className={setActiveClass}>
              Inicio
            </NavLink>
            <NavLink to="/viewsdescription" className={setActiveClass}>
              Descripción
            </NavLink>
            <NavLink to="/projects" className={setActiveClass}>
              Proyectos
            </NavLink>
            <NavLink to="/contacts" className={setActiveClass}>
              Contacto
            </NavLink>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )
}

export default Browser
