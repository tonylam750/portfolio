import Link from "next/link"

export default function SiteHeader(){
    return(
        <nav>
            <ul className="flex justify-center space-x-5 p-4 border-b">
                <li>
                    <Link href={"/prosjekter"}>Prosjekter</Link>
                </li>
                <li>
                    <Link href={"/"}> Home</Link>
                </li>
            </ul>
        </nav>
    )
}