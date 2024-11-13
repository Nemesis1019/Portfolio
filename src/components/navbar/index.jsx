import {BsGithub} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {BiLogoGmail} from "react-icons/bi"
import {BsWhatsapp} from "react-icons/bs"
import {AiFillFolder} from "react-icons/ai"
import {BiSolidUserCircle} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"
import {BsFillLightbulbFill} from "react-icons/bs"
import {HiLanguage} from "react-icons/hi2"
import {texto} from "../../data/data.json"
import { useContext } from "react"
import { Contexto } from "../../context"
import { NavLink } from "react-router-dom"
import React from "react"
export function Navbar(){
    const {Trans,setTrans,Color,setColor,Click,setClick}=useContext(Contexto)
    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
          component.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const active="bg-black"
    return(
        <nav className={`flex flex-col fixed   left-0 top-0 w-2/5 px-3 py-5 gap-3 min-h-screen duration-1000 ease-out ${Color?"bg-fondo":"bg-white"}`} >
                <span className="flex flex-box gap-2">
                    <BsFillLightbulbFill onClick={()=>{setColor(!Color)}} className={`text-texto  duration-1000 ease-out  hover:scale-150 cursor-pointer ${Color?"hover:text-white":"hover:text-fondo"} `} size={25}/>
                    <HiLanguage onClick={()=>{setTrans(!Trans)}} className={`text-texto  duration-1000 ease-out  hover:scale-150 cursor-pointer ${Color?"hover:text-white":"hover:text-fondo"} ${(!Color?(Trans?"text-red-500 scale-[150%]":"scale-100 "):(Trans?"scale-[150%] text-green-500 ":"scale-100"))}` } size={25} />
                </span>
                
                <div className=" h-screen flex flex-col justify-center items-center gap-3">
                    <span className="w-full">
                        <h1 className={`text-2xl duration-1000 ease-out ${Color?"text-texto":"text-fondoclaro"} `}>Carlos Arcos</h1>
                        <h1 className={`text-2xl duration-1000 ease-out ${Color?"text-texto":"text-fondoclaro"} `}>{texto[Trans?1:0].title}</h1>
                    </span>
                
                    <div className="w-full h-3/5  flex flex-col justify-center mb-8">
                    <ul className="flex flex-col gap-6 ">
                        <NavLink to="#home" onClick={()=>scrollToComponent("home")}> 
                            <li className={` flex flex-box gap-2 duration-1000 ease-out ${Color?"text-texto":"text-fondoclaro"} hover:scale-125 hover:ml-8  hover:animate-pulse`}><AiFillHome className="ml-5 duration-1000 ease-out " size={25}/><p className="font-bold">{texto[Trans?1:0].home}</p></li>
                        </NavLink>
                        <hr className={`w-2/3 duration-1000 ease-out ${Color?"border-t-2  border-white":"border-t-2 border-fondoclaro"} `}/>
                        <NavLink to="#about" onClick={()=>scrollToComponent('about')}>
                            <li  className={`flex flex-box gap-2 duration-1000 ease-out ${Color?"text-texto":"text-fondoclaro"} hover:scale-125 hover:ml-8   hover:animate-pulse ${(isActive)=>isActive?"bg-white":""}`}><BiSolidUserCircle className="ml-5 duration-1000 ease-out " size={25}/><p className="font-bold">{texto[Trans?1:0].about}</p></li>
                        </NavLink>
                        <hr className={`w-2/3 duration-1000 ease-out ${Color?"border-t-2  border-white":"border-t-2 border-fondoclaro"} `}/>
                        <NavLink to="#projects" onClick={()=>scrollToComponent("projects")} >
                            <li className={ `flex flex-box gap-2 duration-1000 ease-out ${Color?"text-texto":"text-fondoclaro"} hover:scale-125 hover:ml-8  hover:animate-pulse`}><AiFillFolder className="ml-5 " size={25}/><p className="font-bold ">{texto[Trans?1:0].projects}</p> </li>
                        </NavLink>
                        <hr className={`w-2/3 duration-1000 ease-out ${Color?"border-t-2  border-white":"border-t-2 border-fondoclaro"} `}/>
                    </ul>
                    </div>
                    <ul className="flex flex-row gap-4 ml-2 justify-star w-full">
                        <a href="https://github.com/Nemesis1019" target="_blank">
                            <li ><BsGithub className={`${!Color?"text-fondoclaro":"text-texto"}  duration-1000 ease-out  hover:scale-150 ${!Color?"hover:text-black":"hover:text-white"}`} size={25}  /></li>
                        </a>
                        <a href="https://linkedin.com/in/carlos-arcos-1019bc" target="_blank">
                            <li> 
                                <AiFillLinkedin className={`${!Color?"text-fondoclaro":"text-texto"}  duration-1000 ease-out  hover:scale-150 ${!Color?"hover:text-black":"hover:text-white"}`} size={25}/>
                            </li>
                        </a>
                        
                        <a href="mailto:caac1019@gmail.com" target="_blank">
                            <li> 
                                <BiLogoGmail className={`${!Color?"text-fondoclaro":"text-texto"}  duration-1000 ease-out  hover:scale-150 ${!Color?"hover:text-black":"hover:text-white"}`} size={25}/>
                            </li>
                        </a>
                        
                        <a href="https://api.whatsapp.com/send/?phone=573045701103" target="_blank">
                            <li><BsWhatsapp className={`${!Color?"text-fondoclaro":"text-texto"}  duration-1000 ease-out  hover:scale-150 ${!Color?"hover:text-black":"hover:text-white"}`} size={25}/></li>
                        </a>
                    </ul>
                </div>  
        </nav>
    )
}