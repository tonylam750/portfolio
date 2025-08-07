"use client"
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


import RedButton from "@/components/bigRedButton"
import { useRef, useState } from "react"

export default function BigRedButton(){
     const [pressed, setPressed] = useState(false)
     const { width, height } = useWindowSize()

     const audioRef = useRef(
        typeof Audio !== 'undefined'
      ? new Audio('/confetti.mp3')
      : null
     )
     
    function buttonPressed() {
         audioRef.current?.play().catch((e) => {
      // catch in case the browser blocked autoplay
      console.warn('Audio play failed:', e)
    })
    setPressed(true)

    setTimeout(() => setPressed(false), 5000)

  }
    return (
        <>
        {pressed? <Confetti width={width} height={height}/> :""}
        <div className="flex-1 flex h-full justify-center items-center ">

                   <button disabled={pressed} onClick={buttonPressed} className={` rounded-full   w-[400px]  h-[400px] bg-[#fe5864] border-none  text-white 
                                      shadow-[0_16px_0_#b8181d] box-shadow: 0px 10px 0px #b8181d  mb-[5px] transition-[box-shadow,transform]  cursor-pointer 
                                      active:transform active:shadow-[0_1px_0_#b8181d] active:translate-y-[5px]
                                    
                                    disabled:cursor-not-allowed
                                    disabled:pointer-events-none
                                       `}
                                      >
                                    
                                     {pressed ? "bruh" : "IKKE TRYKK"}
                  </button>
        </div>
        </>
    )
}