
import Image from "next/image"
import TestImg from "../../../public/images/rick.png"
import Card from "@/components/card"

export default function Prosjects(){
    return(
       <div className="container px-4 py-8 mx-auto">
            <div className="grid justify-items-center gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

            <Card src={TestImg} color={"#ebe480"}/>
            <Card src={TestImg} color={"#431331"}/>
            <Card src={TestImg} color={"#53a1a4"}/>
            <Card src={TestImg} color={"#73cb69"}/>
            <Card src={TestImg} color={"#d480eb"}/>
            <Card src={TestImg} color={"#eb809b"}/>
            <Card src={TestImg} color={"##7f63d5"}/>
            <Card src={TestImg} color={"#431331"}/>
            
            </div>
        </div>

    )}