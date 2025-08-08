
import Link from "next/link"
import { ReactNode } from "react"


export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}
export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <li className="text-md uppercase">
      <Link
        href={href}
        className={`pl-6 py-2  rounded-md cursor-pointer hover:text-emerald-300 ${isActive ? "underline" : ""} ${isActive ? "text-emerald-300" : "text-white"}`}
      >{children}</Link>
    </li>
  )
}