import {BsGithub} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {BiLogoJavascript} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {BiLogoTailwindCss} from "react-icons/bi"
import {AiFillHtml5} from "react-icons/ai"
import { useContext } from "react"
import { Contexto } from "../../context"

export function CardMobile({datos}){
    const {Color}=useContext(Contexto)
    return(
        <div className=" w-full">
            <div className={`element mx-[8%] h-[200px] rounded-lg mb-6 flex flex-box border-2 ${!Color?"border-black":"border-white"} ` }>
                <figure className="element h-full w-2/5  rounded-lg object-cover" >
                    <img src={datos.imagenes} className="w-full h-full object-cover"/>
                </figure>
                <span className="w-2/5 element  flex flex-col items-center justify-center  ">
                    <div className="font-bold text-xl">
                    {datos.title}
                    </div>
                    <div className="flex element flex-box">
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
                    </div>
                    
                </span>
                <span className={`{Color?:"bg-white":"bg-fondo"} w-1/5 rounded-lg flex flex-col justify-center items-center gap-4`}> 
                    <a className={`flex flex-col items-center justify-center bg-gray-400 text-white w-1/3 h-16   transition  ${!Color?"hover:bg-black duration-1000 rounded-lg hover:scale-125 ":"hover:bg-white hover:text-black duration-1000 rounded-lg hover:scale-125 text-gray-900"}`} href={datos.giturl} target="_blank" rel="noreferrer">
                        <BsGithub className="animate-pulse"/>
                    </a>
                    <a className={`flex flex-col items-center justify-center bg-gray-400 text-white w-1/3 h-16   transition  ${!Color?"hover:bg-black duration-1000 rounded-lg hover:scale-125 ":"hover:bg-white hover:text-black duration-1000 rounded-lg hover:scale-125 text-gray-900"}`} href={datos.pageurl} target="_blank" rel="noreferrer">
                        <AiFillPlayCircle className="animate-pulse"/>  
                    </a>
                             
                </span>
            </div>
        </div>
    )
}