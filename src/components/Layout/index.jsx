import { useContext } from "react"
import { Contexto } from "../../context"
import { useMediaQuery } from "@mui/material"
import { Navbar } from "../navbar"
import { Navmobile } from "../navbar_mobile"
export function Layout({children}){
    const valor=useMediaQuery('(min-width: 850px)')
    return(
        <div className={`flex md:flex-row flex-col items-center ${valor ? "ml-[0%]" : "ml-[0%]"}`}>
        {/* Primer contenedor: 40% del ancho de la pantalla en pantallas medianas o más grandes */}
        <div className="w-full md:w-2/5">
          
          
        </div>
      
        
        <div className="w-full md:w-3/5">
          
          {children}
        </div>
      </div>
    )
}