import { useContext } from "react"
import { Contexto } from "../../context"
import {AiFillFolder} from "react-icons/ai"
import {BiSolidUserCircle} from "react-icons/bi"
import {AiFillHome} from "react-icons/ai"
import {BsFillLightbulbFill} from "react-icons/bs"
import {HiLanguage} from "react-icons/hi2"

export function Navmobile(){
    const {Trans,setTrans,Color,setColor}=useContext(Contexto)

    const scrollToComponent = (componentId) => {
        const component = document.getElementById(componentId);
        if (component) {
          component.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return(
        <nav className={`flex flex-box justify-between duration-1000 ease-out items-center w-full h-[10%] fixed top-0 ${Color?"bg-black text-white":"bg-white text-black"}`}>
            <span className="flex flex-box gap-4 ml-4">
                <AiFillHome onClick={()=>scrollToComponent("home")} size={25}/>
                <BiSolidUserCircle onClick={()=>scrollToComponent('about')} size={25}/>
                <AiFillFolder onClick={()=>scrollToComponent("projects")} size={25}/>
            </span>
            <span className="flex flex-box gap-4 mr-8">
                <BsFillLightbulbFill onClick={()=>setColor(!Color)} size={25} />
                <HiLanguage onClick={()=>{setTrans(!Trans)}} size={25}/>
            </span>
            
        </nav>
    )}
