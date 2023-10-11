import { Layout } from "../../components/Layout"


import { useContext,useEffect } from "react"
import { Contexto } from "../../context"
import {texto} from "../../data/data.json"
import ScrollReveal from "scrollreveal"
export function Home(){
    const {Color,Trans}=useContext(Contexto)
    
    useEffect(() => {
      const sr = ScrollReveal();
  
      sr.reveal('.elemento', {
        duration: 1000, // Duración de la animación en milisegundos
        origin: 'left', // Origen de la animación
        distance: '30px', // Distancia desde el origen
        delay: 200,
        easing: 'ease',
        reset:'true'
         // Retraso en milisegundos
        // Puedes agregar más opciones de configuración aquí
      });
    }, []);
    
    return(
        <Layout>
            <span id="home" className={` w-full h-[100vh] flex flex-box justify-center items-center duration-1000 ease-out ${Color?"bg-fondo":"bg-white"}  text-texto`}>
            <p className={`${!Color?" text-fondoclaro":"text-white"} elemento animate-pulse text-5xl`}>{texto[Trans?1:0].welcome}</p>
            
            
            </span>
        </Layout>
    )
}