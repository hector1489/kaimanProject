import { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import lofi from "../../assets/audio/lofi.mp3";
import './Navbar.css';

const Browser = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const setActiveClass = ({ isActive }) =>
    `nav-link-custom me-3 text-decoration-none ${isActive ? "text-neon-green fw-bold" : "text-white-50"
    }`;

  const toggleAudio = useCallback(() => {
    setIsAudioPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      isAudioPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <Navbar className="container-navbar" expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <button
            onClick={toggleAudio}
            className={`button-icon-astro ${isAudioPlaying ? 'is-active' : ''}`}
            aria-label={isAudioPlaying ? 'Pause music' : 'Play music'}
          >
            <i className={`fa-solid fa-user-astronaut fa-2xl ${isAudioPlaying ? 'playing' : ''}`} />
          </button>
          <audio ref={audioRef} src={lofi} loop />
          {/* Cambiado .I a neon-blue para el contraste del pantano */}
          <span className="brand-text text-white fw-light tracking-tighter ms-2">
            REPTAR<b className="text-neon-blue">.I</b>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="burguer-button" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink to="/" className={setActiveClass}>INICIO</NavLink>
            <NavLink to="/viewsdescription" className={setActiveClass}>SOBRE MÍ</NavLink>
            <NavLink to="/projects" className={setActiveClass}>PROYECTOS</NavLink>
            <NavLink to="/contacts" className={setActiveClass}>CONTACTO</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Browser;