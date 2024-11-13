import { Layout } from "../../components/Layout"
import { Contexto } from "../../context"
import {texto} from "../../data/data.json"

import { useContext,useEffect } from "react"
import ScrollReveal from "scrollreveal"
import { About } from "../about"
import { Projects } from "../projects"
export function Home(){
    const {Color,Trans}=useContext(Contexto)
    
    useEffect(() => {
      const sr = ScrollReveal();
  
      sr.reveal('.elemento', {
        duration: 1000,  // Duración de la animación en milisegundos
        origin: 'left',  // Origen de la animación
        distance: '0px', // Distancia de desplazamiento, ajustado para que no espere
        delay: 0,        // Sin retraso para que inicie de inmediato
        easing: 'ease',
        reset: true,
        viewFactor: 0.10, // Revela cuando el 1% del elemento es visible
      });
    }, []);
    
    return(
      <>
        <Layout>
            <span id="home" className={` w-full h-[100vh] flex flex-box justify-center items-center duration-1000 ease-out ${Color?"bg-fondo":"bg-white"}  text-texto`}>
            <p className={`${!Color?" text-fondoclaro":"text-white"} elemento animate-pulse text-5xl`}>{texto[Trans?1:0].welcome}</p>
            
            
            </span>
            <About/>
            <Projects/>
        </Layout>
        
        </>
    )
}