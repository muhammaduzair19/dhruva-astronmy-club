'use client'
import Link from "next/link"
import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri";
import MobileNav from "./mobilenav";



const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <nav className="w-full z-50 sticky glass top-0 text-white flex items-center justify-between  px-6 sm:px-10 md:px-16 lg:px-20 py-4">
            <span className="flex flex-col justify-center">
                <h1 className="text-2xl md:text-2xl font-bold">DHRUVA</h1>
                <p className="text-xs">ASTRONOMY CLUB</p>
            </span>
            <span className=" space-x-4 hidden md:flex">
                {['home', 'events', 'podcasts', 'about']?.map((item) => (
                    <Link key={item} className="font-bold text-xl uppercase" href={item === 'home' ? '/' : `/${item}`}>{item}</Link>
                ))}
            </span>
            <span onClick={() => setShowNav(true)} className="inline-block md:hidden text-2xl">
                <RiMenu3Fill />
            </span>
            <MobileNav setShowNav={setShowNav} showNav={showNav} />
        </nav>
    )
}



export default Navbar