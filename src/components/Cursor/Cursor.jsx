// src/components/Cursor.js
import { useEffect } from 'react'
import './Cursor.css'

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor-light');
    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    };
  }, [])

  return <div className="cursor-light" id="cursor-light"></div>
}

export default Cursor
