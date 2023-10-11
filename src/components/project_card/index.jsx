
import { Contexto } from "../../context"
import { useContext } from "react"
import {BsGithub} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {BiLogoJavascript} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {BiLogoTailwindCss} from "react-icons/bi"
import {AiFillHtml5} from "react-icons/ai"



export function Cardproject({datos}){

    
    const {Car,setCar,Color}=useContext(Contexto)
    
   
    return(
            <div onMouseEnter={()=>setCar(true)} onMouseLeave={()=>setCar(false)} className="relative w-44 h-44 drop-shadow-2xl rounded-lg border-2 border-indigo-600 mr-4">
                <div className=" absolute w-full  z-0 rounded-lg flex flex-col gap-3 justify-center items-center">
                    <h1 className={`font-bold ${Color?"text-white":"text-fondo"}`}> {datos.title}</h1>
                    <hr/>
                    <div className="flex flex-row gap-3 w-full h-full justify-center items-center">
                        <a className={`flex flex-col items-center justify-center bg-gray-400 text-white w-1/3 h-16   transition  ${!Color?"hover:bg-black duration-1000 rounded-lg hover:scale-125":"hover:bg-white hover:text-black duration-1000 rounded-lg hover:scale-125 text-gray-900"}`} href={datos.giturl} target="_blank" rel="noreferrer">
                            <button ><BsGithub/></button>
                        </a>
                        <a className={`flex flex-col items-center justify-center bg-gray-400 text-white w-1/3 h-16   transition  ${!Color?"hover:bg-black duration-1000 rounded-lg hover:scale-125 ":"hover:bg-white hover:text-black duration-1000 rounded-lg hover:scale-125 text-gray-900"}`} href={datos.pageurl} target="_blank" rel="noreferrer">
                            <button  ><AiFillPlayCircle /></button>
                        </a>   
                    </div>
                </div>
                <div className={` bg-white w-44 h-44 rounded-lg ${Car?" translate-x-[-100%]  transition duration-1000 opacity-0 ":"translate-x-0 transition duration-1000"} h-[80px]`}>
                    <span className="w-full flex flex-grow h-2/5 ml-3 gap-4">
                        {datos.icons.map(icon=>{
                            console.log(icon)
                            switch(icon){
                                case "js":
                                  return  <BiLogoJavascript className="text-yellow-400" size={35}/>
                                case "react":
                                  return  <BiLogoReact color="aqua" size={35}/>    
                                case "tailwind":
                                  return  <BiLogoTailwindCss className="text-blue" size={35}/>
                                case "html":
                                    return<AiFillHtml5 className="text-orange " size={35}/>
                            }   
                        })}
                    </span> 
                    <hr className="border-t-2 border-fondoclaro"></hr>
                    <figure className="w-full h-[140px]">
                        <img className="w-full h-full object-cover"  src={datos.imagenes}></img>
                    </figure>
                </div>
            </div>  
        
    )
    }