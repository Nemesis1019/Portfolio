import { Layout } from "../Layout"
import { Contexto } from "../../context"
import { useContext, useEffect } from "react"
import {BsGithub} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {BiLogoJavascript} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {BiLogoTailwindCss} from "react-icons/bi"
import {AiFillHtml5} from "react-icons/ai"



export function Cardproject({datos}){

    const rendericon=(icons)=>{
       icons.forEach(element => {
        if (element==="js"){
                
            return(<BiLogoJavascript/>)
        }
       });   
    };
    
    
    
    const {Car,setCar}=useContext(Contexto)
    
   
    return(
        
            <div onMouseEnter={()=>setCar(true)} onMouseLeave={()=>setCar(false)} className="relative w-44 h-44 drop-shadow-2xl rounded-lg border-2 border-indigo-600">
                <div className=" absolute w-full    h-full z-0 rounded-lg flex flex-col gap-3 justify-center items-center">
                    <h1 className="font-bold"> {datos.title}</h1>
                    <hr/>
                    <div className="flex flex-row gap-3 w-full justify-center">
                        <a className="bg-black text-white w-1/3 h-16   transition  hover:bg-white duration-1000 rounded-lg" href={datos.giturl} target="_blank">
                            <button ><BsGithub/></button>
                        </a>
                        <a className="bg-black text-white w-1/3 h-16   transition  hover:bg-white duration-1000 rounded-lg" href={datos.pageurl} target="_blank" >
                            <button  ><AiFillPlayCircle /></button>
                        </a>   
                    </div>
                </div>
                <div className={` bg-white w-full  rounded-lg ${Car?" translate-x-[-100%]  transition duration-1000 opacity-0 ":"translate-x-0 transition duration-1000"} `}>
                    <span className="w-full h-1/4">
                        <div>
                            {(rendericon(datos.icons))}
                        </div>
                    </span>
                    <figure className="h-2/3"  >
                        <img  src={datos.imagenes} alt={datos.imagedescription} />
                    </figure>
                </div>
            </div>  
        
    )
    }