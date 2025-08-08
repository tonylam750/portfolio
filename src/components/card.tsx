
import Image, { StaticImageData } from "next/image"
import { GithubIcon} from "lucide-react";

type CardProps = {
    src:StaticImageData,
    href: string
    git: string

}
export default function Card ({src, href, git}:CardProps){
    return(
          <div className={`overflow-hidden max-w-[650px]  h-fit transition-shadow shadow-md shadow-slate-600  rounded-xl  hover:shadow-[#9877b4]  `}>
                <a target="_blank" href={href}>
                <div className="relative w-full h-fit hover:cursor-pointer">
                    <Image
                        src={src}
                        alt={"sjs"}
                        height={300}
                        width={600}
                        />
                </div>
                        </a>  
                <div className="bg-[#403d3c] p-4">
                    <div className="flex justify-center items-center  min-h-[1.5rem]">
                        <a target="_blank" href={git} className="cursor-pointer">

                        <h2  className=" border-2 border-[#9877b4] px-4 py-2 rounded-full text-xl text-center font-semibold text-white ">
                            <GithubIcon/>
                        </h2>
                        </a>
                    </div>
                    
                </div>
            </div>
    )
}