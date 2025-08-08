


import Card from "@/components/card"
import Rick from "../../../public/images/rick.png"
import Labubu from "../../../public/images/labubu.png"
import Student from "../../../public/images/student.png"
import Film from "../../../public/images/film.png"
import Is from "../../../public/images/is.png"
import Color from "../../../public/images/color.png"




export default function Prosjects(){
    return(
       <div>
        <h1 className=" mt-10 text-2xl md:text-4xl text-center font-bold mb-8">Mine prosjekter</h1>
        <p className="text-center mb-8">Her er noen av prosjektene jeg har jobbet med</p>  
        <div className="container px-4 py-8 mx-auto">
            <div  className="grid justify-items-center gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            <Card src={Rick}  href="https://rick-and-morty-pink-nine.vercel.app/" git="https://github.com/tonylam750/rick-and-morty"/>
            <Card src={Labubu}  href="https://labubus.netlify.app/" git="https://github.com/tonylam750/Labubus"/>
            <Card src={Student}  href="https://studentmat.netlify.app/" git="https://github.com/tonylam750/StudentMat"/>
            <Card src={Film}  href="https://minfilmliste.netlify.app/" git="https://github.com/tonylam750/min-filmliste"/>
            <Card src={Is}  href="http://iskrem-diagram.vercel.app/" git="https://github.com/tonylam750/iskrem-diagram"/>
            <Card src={Color}  href="https://color-scheme-gene.netlify.app/" git="https://github.com/tonylam750/color-scheme-gen"/>


            
            </div>
        </div>
       </div>

    )}