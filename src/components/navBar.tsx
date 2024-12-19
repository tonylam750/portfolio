import Link from "next/link"


export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 border border-transparent border-b-slate-900" >
            <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-12">
               <Link href="/" className="text-5xl text-whitw font-sans">Tony<span className="text-fuchsia-500">.</span></Link>
                <div className="menu block md:w-auto" id="navbar ">
                    <ul className="flex md:flex-row justify-center space-x-5 md:space-x-8 p-4 md:p-0 ">
                        <li><Link href="/Prosjekter" className=" text-[#ADB7BE]  hover:text-white">Prosjekter</Link></li>
                        <li><Link href="/About">About</Link></li>
                    </ul>
                </div> 
            </div>
        </nav>
    )
}