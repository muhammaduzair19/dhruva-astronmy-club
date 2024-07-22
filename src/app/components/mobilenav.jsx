import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";


const MobileNav = ({ showNav, setShowNav }) => {
    return (
        <div className={`z-50 h-screen fixed right-0 md:hidden bg-zinc-950 top-0  bottom-0 sm:-right-10 ${showNav == true ? 'w-1/2' : 'w-0'} duration-700 delay-150 ease-in-out flex flex-col justify-center`}>
            <span className={`${showNav ? "text-white text-3xl absolute top-3 left-3" : "hidden duration-500 delay-300 ease-in-out"}`} onClick={() => setShowNav(false)}>
                <RiCloseLine />
            </span>
            <span className=" flex flex-col items-start gap-5 mx-auto">
                {['home', 'events', 'podcasts', 'about']?.map((item, i) => (
                    <Link key={item} className={`${showNav ? `block font-bold uppercase duration-300 delay-[1000*${i}]` : "hidden duration-200 delay-500"}`} onClick={() => setShowNav(!showNav)} href={item === 'home' ? '/' : `/${item}`}>{item}</Link>
                ))}
            </span>
        </div>
    )
}


export default MobileNav;