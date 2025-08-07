
import Image, { StaticImageData } from "next/image"

type CardProps = {
    src:StaticImageData,
    color: string,

}
export default function Card ({src, color}:CardProps){
    return(
          <div className={`overflow-hidden max-w-[650px] hover:cursor-pointer h-fit transition-shadow shadow-xl  shadow-slate-600  rounded-xl  hover:shadow-[#9877b4]`}
                style={{background: color}}>
                <div className="relative w-full h-fit">
                    <Image
                        src={src}
                        alt={"sjs"}
                        height={300}
                        width={600}
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between mb-2 min-h-[3.5rem]">
                        <h2  className="text-xl font-semibold text-gray-800 line-clamp-2">
                           hello
                        </h2>
                    </div>
                    
                </div>
            </div>
    )
}