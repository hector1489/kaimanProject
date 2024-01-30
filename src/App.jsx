import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from './components/index.jsx'
import '../src/App.css'
import { Home, NotFound, Projects, Contacts, Description } from './views/index.jsx'
import DataContext from "./context/Datacontext"
import dataJson from "./data.json"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataJson.projects);
  }, []);

  const globalState = {
    data,
    setData
  }

  return (
    <DataContext.Provider value={globalState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewsdescription" element={<Description />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
