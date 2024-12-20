import Link from "next/link"
import { ModeToggle } from "./toggle"


export default function NavBar() {
    return (
        <nav className=" top-0 left-0 right-0 z-10  dark:bg-[#121212] bg-white bg-opacity-90 border border-transparent dark:border-b-slate-900 border-b-slate-200" >
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-12">
                <Link href="/" className="text-5xl text-whitw font-sans">Tony</Link>
                <div className="menu block md:w-auto" id="navbar ">
                    <ul className="flex md:flex-row justify-center space-x-5 md:space-x-8 p-4 md:p-0 ">
                        <li><Link href="/" className=" dark:text-[#ADB7BE] text-neutral-800 dark:hover:text-white hover:text-black">Hjem</Link></li>
                        <li><Link href={"/spill"} className=" dark:text-[#ADB7BE] text-neutral-800 dark:hover:text-white hover:text-black">Spill</Link></li>
                        <ModeToggle/>

                    </ul>
                </div>
            </div>
        </nav>
    )
}