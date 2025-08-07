
import Link from "next/link"


export default function NavBar() {
    return (
        <nav className="  border-b border-b-slate-200" >
            <div className="flex flex-wrap items-center justify-between  py-2 px-12">
                <Link href="/" className="text-5xl  font-sans font-light text-slate-200">Tony</Link>
                <div >
                    <ul className="flex justify-center space-x-5 md:space-x-8 p-4 md:p-0 ">
                        <li><Link href="/" className="  hover:text-emerald-300">Hjem</Link></li>
                        <li><Link href={"/prosjekter"} className=" hover:text-emerald-300">Spill</Link></li>
                        <li><Link href={"/bigButton"} className=" hover:text-emerald-300">Rød knapp</Link></li>

                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}