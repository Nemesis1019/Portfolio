import { useContext } from "react"
import { Contexto } from "../../context"
import { useMediaQuery } from "@mui/material"
export function Layout({children}){
    const valor=useMediaQuery('(min-width: 850px)')
    return(
        <div className={`flex flex-col items-center ${valor?"ml-[40%]":"ml-[0%"} `}>
            {children}
        </div>
    )
}