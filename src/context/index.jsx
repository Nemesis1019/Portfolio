import { createContext,useState } from "react";

const Contexto= createContext()


function ProContexto({children}){
    const [Car,setCar]=useState(false)
    const [Trans,setTrans]=useState(true)
    const [Color,setColor]=useState(true)
    const [Click,setClick]=useState(false)
    return(
        <Contexto.Provider value={{Car,setCar,Trans,setTrans,Color,setColor,Click,setClick}}>
            {children}
        </Contexto.Provider>
    )
    
}

export {Contexto,ProContexto}