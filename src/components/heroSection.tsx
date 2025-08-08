
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon, Mail, MapPin } from "lucide-react";
import Link from "next/link";



export default function HeroSection() {
    return (
        <section className=" mt-20 ml-10">
            <div className=" grid grid-cols-1 sm:grid-cols-10 ">
                <div className="  col-span-6 text-center sm:text-left md:text-left " >
                    <h1 className="text-emerald- mb-4 text-4xl sm:text-5lg lg:text-6xl font-extrabold mr-10" ><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-purple-500 to-emerald-900 ">
                        Hei, jeg er{" "}
                    </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Tony Lam',
                                5000, 
                                'Arbeidsløs:/',
                                5000
                            ]}
                            wrapper="span"
                            speed={2}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className=" sm:text-lg mb-6 lg:text-xl ">Informatikk student, studerer datateknologi ved Universitetet i Bergen</p>
                    <div className=" mb-2 items-center sm:justify-start justify-center flex"><MapPin></MapPin> <a className="ml-4 hover:text-slate-500" href="https://www.google.no/maps/@60.3947008,5.3379072,14z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Bergen, Sentrum</a></div>
                    <div className=" flex items-center md:justify-start sm:justify-center sm:flex-row gap-2">
                        <Link href="/prosjekter">
                            <button className=" md:text-lg sml:text-lg text-sm px-5 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#53645c]  shadow-md shadow-emerald-800 hover:shadow-emerald-300 ">
                               Se prosjekter
                            </button>
                        </Link>
                        <a href="mailto:tonylam750@outlook.com">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-emerald-500 via-purple-500 to-emerald-900 hover:bg-slate-800 mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"> <Mail></Mail></span>
                            </button>
                        </a>
                        <a href="https://github.com/tonylam750">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-emerald-500 via-purple-500 to-emerald-900 hover:bg-slate-800 mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"> <GithubIcon></GithubIcon></span>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVye7PVgYSDekeBkiULZVFA%3D%3D">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-emerald-500 via-purple-500 to-emerald-900 hover:bg-slate-800 mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"> <LinkedinIcon></LinkedinIcon></span>
                            </button>
                        </a>
                        
                    </div>

                </div>
                <div className=" col-span-4 mt-4 place-self-center lg:mt-0 ">
                    <div className=" overflow-hidden rounded-full border-4  h-72 w-72 ">
                        <Image
                            src="/images/profile-pic.jpg"
                            alt="profile picture"
                            className="h-72 w-72 object-cover rounded"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}