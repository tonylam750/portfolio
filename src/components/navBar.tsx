"use client"

import { usePathname } from "next/navigation"

import NavLink from "./navLink"
import Link from "next/link";
export default function NavBar() {
    const pathname= usePathname();
    return (
        <nav className=" py-3  border-b border-b-slate-200" >
            <div className="flex flex-wrap items-center sm:justify-between justify-center py-2 px-8">
                <Link className="text-6xl" href="/">Tony</Link>
                <div >
                    <ul className=" list-none flex justify-start p-4 md:p-0 ">
                        <NavLink href="/" isActive={pathname === "/"}>Hjem</NavLink>
                        <NavLink href="/prosjekter" isActive={pathname === "/prosjekter"}>Prosjekter</NavLink>
                        <NavLink href="/bigButton" isActive={pathname === "/bigButton"}>Rød knapp</NavLink>

                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}