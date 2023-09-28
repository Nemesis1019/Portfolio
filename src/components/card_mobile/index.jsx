import {BsGithub} from "react-icons/bs"
import {AiFillPlayCircle} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
export function CardMobile(){
    return(
        <div className=" w-full">
            <div className=" mx-[8%] h-[200px] rounded-lg mb-6 flex flex-box border-2 border-black ">
                <figure className="h-full w-2/5  rounded-lg" >

                </figure>
                <span className="w-2/5  flex flex-box justify-center items-center">
                            hola
                </span>
                <span className="bg-white w-1/5 rounded-lg flex flex-col justify-center items-center gap-4">
                        <div className="flex flex-row gap-4">
                            <BsGithub/>
                            <AiOutlineArrowRight/>
                        </div>
                        <div className="flex flex-row gap-4" >
                            <AiFillPlayCircle/>
                            <AiOutlineArrowRight/>
                        </div>
                           
                </span>
            </div>
        </div>
    )
}