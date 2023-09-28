import { Layout } from "../../components/Layout"
import { NavLink } from "react-router-dom"
import { useMediaQuery } from "@mui/material"
import { useContext } from "react"
import { Contexto } from "../../context"
import {texto} from "../../data/data.json"
export function Home(){
    const {Color,Trans}=useContext(Contexto)
    const valor=useMediaQuery('(min-width: 850px)')
    
    return(
        <Layout>
            <span id="home" className={`w-full h-[100vh] flex flex-box justify-center items-center duration-1000 ease-out ${Color?"bg-fondo":"bg-white"}  text-texto`}>
            <p className={`${!Color?"text-fondoclaro":"text-white"} animate-pulse text-5xl`}>{texto[Trans?1:0].welcome}</p>
            
            
            </span>
        </Layout>
    )
}