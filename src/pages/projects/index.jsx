import {projects} from "../../data/data.json"
import { Layout } from "../../components/Layout"
import { Cardproject } from "../../components/project_card"
import { CardMobile } from "../../components/card_mobile"
import { useContext } from "react"
import { Contexto } from "../../context"
import { useMediaQuery } from "@mui/material"
import {texto} from "../../data/data.json"
export function Projects(){
    const {Color,Trans}=useContext(Contexto)
    const valor=useMediaQuery('(min-width: 850px)')
    return(
         <Layout>
            <div className={`w-full h-screen flex flex-col justify-center items-center text-2xl duration-1000 ease-out ${Color?"text-texto bg-fondo":"text-fondoclaro bg-white"} `} id="projects">
                <span className="h-32 w-full flex flex-col justify-center items-center mb-5">
                    <h1 className="text-5xl">{texto[Trans?1:0].projects}</h1>
                </span>
                <hr className={`w-2/3 duration-1000 ease-out ${Color?"border-t-2  border-white":"border-t-2 border-fondoclaro"} `}/>
                <span className="h-16 w-full flex flex-col justify-center items-center">
                    <p>{texto[Trans?1:0].descripcion2}</p>
                </span>
                <div className={`h-[100vh] grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-4 w-full duration-1000 ease-out ${!Color?"bg-white":"bg-fondo"}  mt-4 mb-8`}>
                    {!valor?projects.map((dato)=>(<CardMobile key={dato.id} datos={dato}/>)):projects.map((dato)=>(<Cardproject key={dato.id} datos={dato}/>))}
                </div>
            </div>
        </Layout>
                
    )
}