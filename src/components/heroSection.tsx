
'use client'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";






export default function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-left md:text-left">
                    <h1 className="text-emerald- mb-4 text-4xl sm:text-5lg lg:text-6xl font-extrabold" ><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-purple-500 to-emerald-900 ">
                        Hei, jeg er{" "}
                    </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Tony Lam',
                                5000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Arbeidsløs:/',
                                5000
                            ]}
                            wrapper="span"
                            speed={2}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">Informatikk student, studerer datateknologi ved Universitetet i Bergen</p>
                    <div className="flex items-end sm:flex-row gap-2">
                        <a href="https://onsk.no/lister/510-y6r">
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-emerald-500 via-purple-500 to-emerald-900 hover:bg-orange-500 dark:text-white text-black">
                                Ønskeliste
                            </button>
                        </a>
                        <a href="mailto:tonylam750@outlook.com">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-emerald-500 via-purple-500 to-emerald-900 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"> <Mail></Mail></span>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVye7PVgYSDekeBkiULZVFA%3D%3D">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-emerald-500 via-purple-500 to-emerald-900 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"> <GithubIcon></GithubIcon></span>
                            </button>
                        </a>
                        <a href="https://github.com/tonylam750">
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-emerald-500 via-purple-500 to-emerald-900 hover:bg-slate-800 text-white mt-3">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2"> <LinkedinIcon></LinkedinIcon></span>
                            </button>
                        </a>
                        
                    </div>

                </div>
                <div className="col-span-4 mt-4 lg:mt-0 ">
                    <div className=" overflow-hidden rounded-full border-black dark:border-white border-4  h-72 w-72 ">
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