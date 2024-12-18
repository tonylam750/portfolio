import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <ul className="flex justify-center space-x-5 p-4 border-b border-slate-900">
                <li>
                    <p >Tony.</p>
                </li>
                <li>
                    <Link href={"/"}> Home</Link>
                </li>
                <li>
                <Link href={"/prosjekter"}>Prosjekter</Link>
                </li>
            </ul>
        </nav>
    )
}