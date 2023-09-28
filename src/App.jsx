import { Navbar } from "./components/navbar"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Projects } from "./pages/projects"
import { Navmobile } from "./components/navbar_mobile"
import { ProContexto } from "./context"

import { useMediaQuery } from "@mui/material"
import { Route,Routes,BrowserRouter } from "react-router-dom"


function App() {
  const valor=useMediaQuery('(min-width: 850px)')
  return (
    <>
      <ProContexto>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            
          </Routes>
          
          <About/>
          <Projects/>
          {!valor?<Navmobile/>:<Navbar/>}
        </BrowserRouter>
      </ProContexto>
    </>
  )
}

export default App
