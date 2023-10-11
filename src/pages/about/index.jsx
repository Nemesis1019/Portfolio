import { Layout } from "../../components/Layout"
import { useContext} from "react"
import { Contexto } from "../../context"
import {texto} from "../../data/data.json"
import {BiLogoJavascript,BiLogoHtml5,BiLogoCss3,BiLogoTailwindCss,BiLogoDjango,BiLogoReact} from "react-icons/bi"
import {BsGit} from "react-icons/bs"
import Python from "../../assets/icons8-python.svg"

export function About(){
    
   
    const {Trans,Color}=useContext(Contexto)
    return(<Layout>
        <div className={` w-full h-[1400px] flex flex-col gap-4 justify-center items-center text-2xl duration-1000 ease-out ${Color?"text-texto bg-fondo":"text-fondoclaro bg-white"} `} id="about">
            <p className=" elemento text-5xl">
                {texto[Trans?1:0].about}
            </p>
            <hr className={` elemento w-2/3 duration-1000 ease-out ${Color?"border-t-2  border-white":"border-t-2 border-fondoclaro"} `}/>
            <p className="elemento ml-[4%] mr-[4%] text-xl md:text-2xl"> 
                {texto[Trans?1:0].descripcion}
            </p>
            <p className="elemento flex flex-box justify-start w-full ml-[8%] text-xl md:text-2xl">
                {texto[Trans?1:0].tecno}
            </p>
            <span className="elemento grid grid-cols-2  md:grid-cols-3 w-full justify-items-center ml-[8]  gap-6">
                <div className="flex flex-col elemento items-center duration-1000 ease-out hover:scale-125">
                    <BiLogoReact className=" text-aqua" size={80}/>
                    <p>React</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    <BiLogoJavascript   className="text-yellow-400" size={80}/>
                    <p>Javascript</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    <BiLogoHtml5 className="text-orange " size={80} />
                    <p>Html</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    <BiLogoCss3 className="text-blue2" size={80}/>
                    <p>CSS</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    <BiLogoTailwindCss className="text-blue" size={80}/>
                    <p>TailwindCSS</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    
                    <img className="w-[84px] elemento" src={Python} alt="Python"/>
                    <p>Python</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    <BiLogoDjango color="darkgreen" size={80}/>
                    <p>Django</p>
                </div>
                <div className="elemento flex flex-col items-center duration-1000 ease-out hover:scale-125">
                    <BsGit className="text-orange2" size={80}/>
                    <p>Git</p>
                </div>
            </span>
        </div>
    </Layout>)
}