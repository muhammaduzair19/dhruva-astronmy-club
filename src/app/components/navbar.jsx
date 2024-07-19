'use client'
import Link from "next/link"
import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";



const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <nav className="w-full z-50 sticky top-0 text-white flex items-center justify-between  px-6 sm:px-10 md:px-16 lg:px-20 py-4">
            <span className="flex flex-col justify-center">
                <h1 className="text-2xl md:text-2xl font-bold">DHRUVA</h1>
                <p className="text-xs">ASTRONOMY CLUB</p>
            </span>
            <span className=" space-x-4 hidden md:flex">
                {['home', 'events', 'podcasts', 'about']?.map((item) => (
                    <Link key={item} className="font-bold text-xl uppercase" href={item === 'home' ? '/' : `/${item}`}>{item}</Link>
                ))}
            </span>
            <span onClick={() => setShowNav(!showNav)} className="inline-block md:hidden text-2xl">
                <RiMenu3Fill />
            </span>
            <MobileNav setShowNav={setShowNav} showNav={showNav} />
        </nav>
    )
}

const MobileNav = ({ showNav, setShowNav }) => {
    return (
        <div className={`z-50 min-h-screen md:hidden bg-zinc-950 absolute top-0 -right-6 sm:-right-10 ${showNav ? 'w-1/2' : 'w-0'} duration-700 delay-150 ease-in-out flex flex-col justify-center`}>
            <span className={`${showNav ? "text-white text-2xl absolute top-3 left-3" : "hidden delay-100 ease-in-out"}`} onClick={() => setShowNav(!showNav)}>
                <RiCloseLine />
            </span>
            <span className={`${showNav ? "w-full h-full justify-center items-center space-y-4 flex flex-col md:hidden duration-1000 delay-700" : "hidden"}`}>
                {['home', 'events', 'podcasts', 'about']?.map((item) => (
                    <Link key={item} className="font-bold text-xl uppercase" onClick={() => setShowNav(!showNav)} href={item === 'home' ? '/' : `/${item}`}>{item}</Link>
                ))}
            </span>
        </div>
    )
}

export default Navbar