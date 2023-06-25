import React from 'react'
import data from './data'
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Description from './components/Description'
import Contacto from './components/Contacto'
import Projects from './components/Projects'
import Footer from './components/Footer'
import '../src/App.css'


function App() {
  return (
    <>
      <Navbar />
      <Presentation/>
      <Description/>
      <div className='container'>
        <div className='card-container'>
          {data.projects.map((project) => (
            <Projects
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
      <Contacto />
      <Footer/>
    </>
  );
}

export default App
