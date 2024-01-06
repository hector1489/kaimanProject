import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import '../src/App.css'
import ViewsDescription from "./views/ViwesDescription"
import Home from "./views/Home"
import NotFound from "./views/NotFound"
import Projects from "./views/Projects"
import Contacts from "./views/Contacts"
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
          <Route path="/viewsdescription" element={<ViewsDescription />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
